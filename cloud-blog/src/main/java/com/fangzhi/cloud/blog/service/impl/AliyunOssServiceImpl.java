package com.fangzhi.cloud.blog.service.impl;

import com.aliyun.oss.OSS;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.model.MatchMode;
import com.aliyun.oss.model.PolicyConditions;
import com.fangzhi.cloud.blog.pojo.bo.AliyunOssAntdPolicyBo;
import com.fangzhi.cloud.blog.service.AliyunOssService;
import com.fangzhi.cloud.common.base.Preconditions;
import com.fangzhi.cloud.common.enums.CommonErrorCodeEnum;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;

@Service
public class AliyunOssServiceImpl implements AliyunOssService {
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
    private HttpServletRequest request;

    /**
     * https://ant.design/components/upload-cn/#components-upload-demo-upload-with-aliyun-oss
     * 生成antd 上传文件组件需要的签名
     * @return
     */
    @Override
    public AliyunOssAntdPolicyBo antdPolicy() {
        AliyunOssAntdPolicyBo result = new AliyunOssAntdPolicyBo();
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
     * 获取oss文件夹目录
     * @return
     */
    private String getOssDir(){
        // 获取当前用户
        SSOUser ssoUser = CloudSSOUtil.getSSOUser(request);
        Preconditions.checkNotNull(ssoUser, CommonErrorCodeEnum.ERROR_CODE_99999);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
        // 存储目录 ossKey
        return ALIYUN_OSS_DIR_PREFIX + ssoUser.getUserId() + "/" + simpleDateFormat.format(new Date()) + "/";
    }
}
