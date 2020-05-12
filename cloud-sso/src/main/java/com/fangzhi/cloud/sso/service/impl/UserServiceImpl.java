package com.fangzhi.cloud.sso.service.impl;

import com.alibaba.druid.util.StringUtils;
import com.fangzhi.cloud.sso.dao.mapper.CloudUserMapper;
import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.pojo.bo.SSOLoginUser;
import com.fangzhi.cloud.sso.core.entity.SSOResult;
import com.fangzhi.cloud.sso.pojo.bo.SSORegisterUser;
import com.fangzhi.cloud.sso.service.UserService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService {

    @Resource
    CloudUserMapper cloudUserMapper;

    @Override
    public SSOResult<CloudUser> login(SSOLoginUser ssoLoginUser) {
        if(ssoLoginUser.getPassword().isEmpty()){
            return SSOResult.failed("pwd is null");
        }
        if(ssoLoginUser.getUsername().isEmpty()){
            return SSOResult.failed("username id null");
        }
        CloudUser cloudUser = new CloudUser();
        cloudUser.setUsername(ssoLoginUser.getUsername());
        cloudUser.setPassword(ssoLoginUser.getPassword());
        CloudUser user = cloudUserMapper.loginByUsernameAndPassword(cloudUser);
        if(user==null){
            return SSOResult.failed("login failed, username and password is not right!");
        }
        return SSOResult.success(user);
    }

    @Override
    public SSOResult<CloudUser> register(SSORegisterUser ssoRegisterUser) {
        try {
            if(ssoRegisterUser.getUsername() == null){
                return SSOResult.failed("username is null");
            }
            if(ssoRegisterUser.getPassword() == null){
                return SSOResult.failed("password is null");
            }
            if(!StringUtils.equals(ssoRegisterUser.getPassword(),ssoRegisterUser.getConfirmPassword())){
                return SSOResult.failed("two password mismatch");
            }
            CloudUser cloudUser = new CloudUser();
            cloudUser.setUsername(ssoRegisterUser.getUsername());
            cloudUser.setNickname(ssoRegisterUser.getUsername());
            cloudUser.setPassword(ssoRegisterUser.getPassword());
            cloudUserMapper.insertSelective(cloudUser);
//            cloudUserMapper.selectByPrimaryKey(cloudUser.getId());
            return SSOResult.success(cloudUser);
        }catch (Exception e){
            return SSOResult.failed(e.getMessage());
        }
    }

    @Override
    public SSOResult<CloudUser> getUserById(Integer id) {
        if(id == null){
            return  SSOResult.failed("id is not allow null");
        }
        CloudUser cloudUser = cloudUserMapper.selectByPrimaryKey(id);
        return SSOResult.success(cloudUser);
    }

}
