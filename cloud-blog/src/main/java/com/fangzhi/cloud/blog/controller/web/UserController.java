package com.fangzhi.cloud.blog.controller.web;

import com.fangzhi.cloud.blog.service.BlogUserService;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.pojo.CommonUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    BlogUserService blogUserService;
    @Autowired
    HttpServletRequest request;

    @GetMapping("/currentUser")
    public CommonResult currentUser(){
        CommonUserInfo currentUser = blogUserService.getCurrentUser();
        if(currentUser != null){
            return CommonResult.success(currentUser);
        }else{
            return CommonResult.failed("获取用户信息失败！");
        }
    }

    @GetMapping("/login")
    public CommonResult login(@RequestParam(value = SSOConstant.REDIRECT_URL,required = false) String redirectUrl){
        // success redirect
        return this.currentUser();
    }

    @GetMapping("/logout")
    public void logout(){
        return;
    }
}
