package com.fangzhi.cloud.sso.controller;

import com.fangzhi.cloud.sso.core.entity.SSOResult;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.service.UserService;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@RestController
public class SSOApiController {
    @Resource
    HttpServletRequest request;
    @Autowired
    UserService userService;

    @GetMapping("/currentUser")
    public SSOUser currentUser(){
        return CloudSSOUtil.getSSOUser(request);
    }

    @GetMapping("/user/{id}")
    public SSOResult<CloudUser> getUserById(@PathVariable("id") Integer id){
        return userService.getUserById(id);
    }

}
