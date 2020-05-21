package com.fangzhi.cloud.blog.service;

import com.fangzhi.cloud.blog.pojo.vo.BlogUserVO;
import com.fangzhi.cloud.sso.pojo.CommonUserInfo;

public interface BlogUserService {
    CommonUserInfo getCurrentUser();

}
