package com.yue.blog.portal.service;


import com.yue.blog.portal.pojo.bo.BlogUserBO;
import com.yue.blog.portal.pojo.bo.BlogUserRegisterBO;

public interface UsersService {
    BlogUserBO getById(Integer id);

    BlogUserBO login(String username, String password);

    int register(BlogUserRegisterBO blogUserRegisterBo);

    String getCode(String phone);
}
