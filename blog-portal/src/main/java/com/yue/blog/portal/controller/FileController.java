package com.yue.blog.portal.controller;

import com.yue.blog.common.result.BasePages;
import com.yue.blog.common.result.BaseResult;
import com.yue.blog.portal.pojo.bo.AliyunOSSPolicyBO;
import com.yue.blog.portal.pojo.bo.BlogFileBO;
import com.yue.blog.portal.pojo.dto.BlogFileSearch;
import com.yue.blog.portal.service.FileService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@RestController
@Api(tags="文件管理")
@RequestMapping("/server/file")
public class FileController {
    @Autowired
    private FileService fileService;

    @GetMapping("/policy")
    @ApiOperation("获取aliyun OSS上传签名")
    public BaseResult policy(){
        AliyunOSSPolicyBO policy = fileService.policy();
        return BaseResult.success(policy);
    }

    @PostMapping("/upload")
    @ApiOperation("upload")
    public BaseResult uploadFile(@RequestParam(value = "file") MultipartFile multipartFile){
        BlogFileBO fileBo = fileService.uploadOSSFile(multipartFile);
        return BaseResult.success(fileBo);
    }

    @PostMapping("/async")
    @ApiOperation("async")
    public BaseResult asyncFile(@RequestBody BlogFileBO fileBo){
        boolean b = fileService.asyncFile(fileBo);
        return BaseResult.success(b);
    }

    @GetMapping("/list")
    @ApiOperation("list")
    public BaseResult list(BlogFileSearch search){
        List<BlogFileBO> objects = fileService.listFile(search);
        return BasePages.restPage(objects);
    }

    @GetMapping("/delete")
    @ApiOperation("delete")
    public BaseResult deleteFile(@RequestParam(value = "ossKey",required = true) String ossKey){
        return BaseResult.success(fileService.deleteFile(ossKey));
    }
}
