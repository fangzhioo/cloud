package com.fangzhi.cloud.blog.controller.web;

import com.fangzhi.cloud.blog.pojo.vo.BlogUserVO;
import com.fangzhi.cloud.blog.service.BlogUserService;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import com.fangzhi.cloud.sso.pojo.CommonUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class UserController {
    @Autowired
    BlogUserService blogUserService;

    @GetMapping("/currentUser")
    public CommonResult currentUser(){
        CommonUserInfo currentUser = blogUserService.getCurrentUser();
        if(currentUser != null){
            return CommonResult.success(currentUser);
        }else{
            return CommonResult.failed("获取用户信息失败！");
        }
    }


}
