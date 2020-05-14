package com.fangzhi.cloud.sso.controller;

import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import com.fangzhi.cloud.common.util.StringUtil;
import com.fangzhi.cloud.sso.core.entity.SSOResult;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.pojo.CommonUserInfo;
import com.fangzhi.cloud.sso.service.UserService;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

/**
 * @author fangzhi
 */
@RestController
@RequestMapping("/api")
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
    public CommonResult<CommonUserInfo> getUserById(@PathVariable("id") Integer id){
        CommonUserInfo userInfo = new CommonUserInfo();
        SSOResult<CloudUser> result = userService.getUserById(id);
        if(result.getCode() != SSOResult.SUCCESS_CODE){
            return CommonResult.failed(result.getMsg());
        }
        CloudUser user = result.getData();
        userInfo.setUserId(user.getId());
        userInfo.setUserName(user.getUsername());
        userInfo.setNickName(user.getNickname());
        userInfo.setAvatar(user.getAvatar());
        userInfo.setPhone(user.getPhone());
        userInfo.setEmail(user.getEmail());
        userInfo.setSignature(user.getSignature());
        userInfo.setCreatedTime(StringUtil.formatDate(user.getCreatedTime()));
        userInfo.setModifyTime(StringUtil.formatDate(user.getModifyTime()));
        return CommonResult.success(userInfo);
    }

}
