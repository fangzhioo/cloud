package com.yue.blog.portal.service.Impl;

import cn.hutool.core.io.FileTypeUtil;
import cn.hutool.core.util.IdUtil;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.model.*;
import com.github.pagehelper.PageHelper;
import com.google.common.base.Preconditions;
import com.yue.blog.common.enums.ErrorCodeEnum;
import com.yue.blog.dao.mapper.BlogFileDOMapper;
import com.yue.blog.dao.model.BlogFileDO;
import com.yue.blog.dao.model.BlogFileDOExample;
import com.yue.blog.portal.convertor.DOBOConvertor;
import com.yue.blog.portal.pojo.bo.AliyunOSSPolicyBO;
import com.yue.blog.portal.pojo.bo.BlogFileBO;
import com.yue.blog.portal.pojo.dto.BlogFileSearch;
import com.yue.blog.portal.service.FileService;
import com.yue.blog.portal.utils.BlogUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class FileServiceImpl implements FileService {
    @Value("${aliyun.oss.accessKeyId}")
    private String ALIYUN_OSS_ACCESSKEYID;
    @Value("${aliyun.oss.endpoint}")
    private String ALIYUN_OSS_ENDPOINT;
    @Value("${aliyun.oss.maxSize:10}")
    private int ALIYUN_OSS_MAX_SIZE;
    @Value("${aliyun.oss.bucketName}")
    private String ALIYUN_OSS_BUCKET_NAME;
    @Value("${aliyun.oss.policy.expire:300}")
    private int ALIYUN_OSS_EXPIRE;
    @Value("${aliyun.oss.dir.prefix}")
    private String ALIYUN_OSS_DIR_PREFIX;

    @Autowired
    private OSS ossClient;
    @Autowired
    private BlogFileDOMapper blogFileDOMapper;
    @Autowired
    private HttpServletRequest request;

    /**
     * 生成antd组件需要的签名
     * 参考 https://ant.design/components/upload-cn/#components-upload-demo-upload-with-aliyun-oss
     * @return
     */
    @Override
    public AliyunOSSPolicyBO policy() {
        AliyunOSSPolicyBO result = new AliyunOSSPolicyBO();
        // 存储目录 ossKey
        String dir = getOssDir();
        // 签名有效期 时间戳
        long expireEndTime = System.currentTimeMillis() + ALIYUN_OSS_EXPIRE * 1000;
        Date expiration = new Date(expireEndTime);
        // 文件尺寸
        long maxSize = ALIYUN_OSS_MAX_SIZE * 1024 * 1024;
        // 提交的节点
        String action = "http://" + ALIYUN_OSS_BUCKET_NAME + "." + ALIYUN_OSS_ENDPOINT;
        try {
            PolicyConditions policyConditions = new PolicyConditions();
            policyConditions.addConditionItem(PolicyConditions.COND_CONTENT_LENGTH_RANGE,0,maxSize);
            policyConditions.addConditionItem(MatchMode.StartWith,PolicyConditions.COND_KEY,dir);
            String postPolicy = ossClient.generatePostPolicy(expiration,policyConditions);
            byte[] binaryData = postPolicy.getBytes(StandardCharsets.UTF_8);
            // 签名
            String policy = BinaryUtil.toBase64String(binaryData);
            String signature = ossClient.calculatePostSignature(postPolicy);
            result.setAccessId(ALIYUN_OSS_ACCESSKEYID);
            result.setDir(dir);
            result.setExpire(expiration.getTime());
            result.setHost(action);
            result.setPolicy(policy);
            result.setSignature(signature);
        }catch (Exception e){
            e.printStackTrace();
        }
        return result;
    }

    /**
     * 前端表单上传文件
     * @param multipartFile
     * @return
     */
    @Override
    public BlogFileBO uploadOSSFile(MultipartFile multipartFile) {
        Preconditions.checkNotNull(multipartFile, ErrorCodeEnum.ERROR_99998);
        Preconditions.checkState(multipartFile.getSize()<ALIYUN_OSS_MAX_SIZE*1024*1024,ErrorCodeEnum.ERROR_99999);
        String originalFileName = multipartFile.getOriginalFilename();
        Preconditions.checkNotNull(originalFileName,ErrorCodeEnum.ERROR_99999);
        String fileType = originalFileName.substring(originalFileName.lastIndexOf(".")+1).trim();
        // 存储目录
        String dir = getOssDir() + IdUtil.simpleUUID() + "." + fileType;
        Preconditions.checkState(ossClient.doesBucketExist(ALIYUN_OSS_BUCKET_NAME),ErrorCodeEnum.ERROR_99999);
        try{
            System.out.print(FileTypeUtil.getType(multipartFile.getInputStream()));
            PutObjectRequest putObjectRequest = new PutObjectRequest(ALIYUN_OSS_BUCKET_NAME, dir, multipartFile.getInputStream());
            // 上传
            PutObjectResult putObjectResult = ossClient.putObject(putObjectRequest);
            Preconditions.checkNotNull(putObjectResult,ErrorCodeEnum.ERROR_99999);
            BlogFileDO fileDO = new BlogFileDO();
            fileDO.setFileName(originalFileName);
            fileDO.setFileOssKey(dir);
            fileDO.setFileType(BlogUtils.getContentType(fileType));
            String fullUrl = "https://" + ALIYUN_OSS_BUCKET_NAME + "." + ALIYUN_OSS_ENDPOINT + "/" + dir;
            fileDO.setFileUrl(fullUrl);
            fileDO.setFileOwner(0); // 上传者
            // 保存到数据库
            int i = blogFileDOMapper.insertSelective(fileDO);
            Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
            return DOBOConvertor.doToBO(fileDO);
        }catch (IOException e){
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 获取oss空间中的文件列表
     * @return
     */
    @Override
    public List<Object> listOSSFile() {
        ArrayList<Object> objects = new ArrayList<>();
        ListObjectsRequest listObjectsRequest = new ListObjectsRequest(ALIYUN_OSS_BUCKET_NAME);
        // 获取当前用户
        Integer currentUserId = BlogUtils.getCurrentUserId(request);
        if(currentUserId!=null){
            listObjectsRequest.setPrefix(ALIYUN_OSS_DIR_PREFIX+currentUserId+"/");
        }else{
            listObjectsRequest.setPrefix(ALIYUN_OSS_DIR_PREFIX);
        }
        ObjectListing objectListing = ossClient.listObjects(listObjectsRequest);
        for (OSSObjectSummary ossObjectSummary:objectListing.getObjectSummaries()){
            objects.add(ossObjectSummary);
        }
        return objects;
    }

    @Override
    public List<BlogFileBO> listFile(BlogFileSearch search) {
        PageHelper.startPage(search.getCurrent(),search.getPageSize());
        BlogFileDOExample example = new BlogFileDOExample();
        example.setOrderByClause("created_time desc");
        List<BlogFileDO> fileDOS = blogFileDOMapper.selectByExample(example);
        List<BlogFileBO> list = new ArrayList<>();
        for(BlogFileDO blogFileDO : fileDOS){
            list.add(DOBOConvertor.doToBO(blogFileDO));
        }
        return list;
    }

    @Override
    public boolean deleteFile(String fileKey) {
        // 删除
        BlogFileDOExample example = new BlogFileDOExample();
        example.createCriteria().andFileOssKeyEqualTo(fileKey);
        int i = blogFileDOMapper.deleteByExample(example);
        Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
        try {
            GenericRequest request = new DeleteObjectsRequest(ALIYUN_OSS_BUCKET_NAME).withKey(fileKey);
            ossClient.deleteObject(request);
        } catch (Exception oe) {
            oe.printStackTrace();
        } finally {
            ossClient.shutdown();
        }
        return true;
    }

    @Override
    public boolean asyncFile(BlogFileBO fileBo) {
        Integer currentUserId = BlogUtils.getCurrentUserId(request);
        BlogFileDO fileDO = DOBOConvertor.boToDO(fileBo);
        fileDO.setFileOwner(currentUserId);
        int i = blogFileDOMapper.insertSelective(fileDO);
        Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
        return true;
    }

    /**
     * 获取oss文件夹目录
     * @return
     */
    private String getOssDir(){
        // 获取当前用户
        Integer currentUserId = BlogUtils.getCurrentUserId(request);
        Preconditions.checkNotNull(currentUserId,ErrorCodeEnum.ERROR_10006);
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
        // 存储目录 ossKey
        return ALIYUN_OSS_DIR_PREFIX + currentUserId + "/" + simpleDateFormat.format(new Date()) + "/";
    }

}
