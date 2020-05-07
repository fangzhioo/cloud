package com.fangzhi.cloud.sso.util;

import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.core.entity.SSOUser;

import javax.servlet.http.HttpServletRequest;

public class CloudSSOUtil {

    public static SSOUser getSSOUser(HttpServletRequest request){
        SSOUser ssoUser = (SSOUser) request.getAttribute(SSOConstant.SSO_USER);
        if(ssoUser.getUserName().isEmpty()){
            return null;
        }
        return ssoUser;
    }

}
