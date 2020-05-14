package com.fangzhi.cloud.blog.controller.web;

import com.fangzhi.cloud.blog.pojo.bo.AliyunOssAntdPolicyBo;
import com.fangzhi.cloud.blog.service.AliyunOssService;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/aliyun")
public class AliyunOssController {
    @Autowired
    private AliyunOssService aliyunOssService;

    @GetMapping("/antdPolicy")
    public CommonResult<AliyunOssAntdPolicyBo> antdPolicy(){
        AliyunOssAntdPolicyBo aliyunOssAntdPolicyBo = aliyunOssService.antdPolicy();
        return CommonResult.success(aliyunOssAntdPolicyBo);
    }

}
