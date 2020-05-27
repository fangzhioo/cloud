package com.fangzhi.cloud.blog.controller.web;

import com.fangzhi.cloud.blog.service.BlogUserService;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.pojo.CommonUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/api")
public class UserController {

    @Autowired
    BlogUserService blogUserService;
    @Autowired
    HttpServletRequest request;
    @Value("${cloud-sso.server}")
    private String xxlSsoServer;

    @GetMapping("/currentUser")
    @ResponseBody
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
        return CommonResult.success(xxlSsoServer+SSOConstant.SSO_LOGIN+"?"+SSOConstant.REDIRECT_URL+ "=" + redirectUrl);
    }

    @GetMapping("/logout")
    public CommonResult logout(){
         return CommonResult.success("logout success!");
    }
}
