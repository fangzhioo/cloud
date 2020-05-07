package com.fangzhi.cloud.sso.service;

import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.pojo.bo.SSOLoginUser;
import com.fangzhi.cloud.sso.core.entity.SSOResult;

public interface UserService {
    SSOResult<CloudUser> login(SSOLoginUser ssoLoginUser);

    SSOResult<CloudUser> getUserById(Integer id);
}
