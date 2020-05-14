package com.fangzhi.cloud.blog.controller.server;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/aliyun")
public class AliyunOssCallback {

    @GetMapping("/oss/callback")
    public void ossCallback(){

    }

}
