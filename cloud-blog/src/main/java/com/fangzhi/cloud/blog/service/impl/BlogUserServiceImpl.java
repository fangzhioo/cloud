package com.fangzhi.cloud.blog.service.impl;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.TypeReference;
import com.fangzhi.cloud.blog.pojo.vo.BlogUserVO;
import com.fangzhi.cloud.blog.service.BlogUserService;
import com.fangzhi.cloud.blog.util.SSOHttpServiceUtil;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.pojo.CommonUserInfo;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class BlogUserServiceImpl implements BlogUserService {
    @Autowired
    HttpServletRequest request;
    @Value("${cloud-sso.server}")
    String ssoServerUrl;

    @Override
    public CommonUserInfo getCurrentUser() {
        SSOUser ssoUser = CloudSSOUtil.getSSOUser(request);
        if(ssoUser == null){
            return null;
        }
        String url = ssoServerUrl + "/api/user/" + ssoUser.getUserId();
        String result = SSOHttpServiceUtil.get(url);
        CommonResult<CommonUserInfo> res =  JSON.parseObject(result, new TypeReference<CommonResult<CommonUserInfo>>(){});
        if(res != null && res.getCode().equals(CommonResult.SUCCESS_DEFAULT_CODE)){
            return res.getData();
        }
        return null;
    }
}
