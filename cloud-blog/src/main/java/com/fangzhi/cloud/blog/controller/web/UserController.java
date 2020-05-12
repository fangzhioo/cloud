package com.fangzhi.cloud.blog.controller.web;

import com.alibaba.fastjson.JSON;
import com.fangzhi.cloud.blog.util.SSOHttpServiceUtil;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    HttpServletRequest request;
    @Value("${cloud-sso.server}")
    String ssoServerUrl;


    @GetMapping("/currentUser")
    public CommonResult currentUser(){
        try {
            SSOUser ssoUser = CloudSSOUtil.getSSOUser(request);
            if(ssoUser == null){
                return CommonResult.failed("当前用户获取失败！");
            }
            String url = ssoServerUrl + "/api/user/" + ssoUser.getUserId();
            String result = SSOHttpServiceUtil.get(url);
            return JSON.parseObject(result, CommonResult.class);
        }catch (Exception e){
            e.printStackTrace();
           return CommonResult.failed(e.getMessage());
        }

    }


}
