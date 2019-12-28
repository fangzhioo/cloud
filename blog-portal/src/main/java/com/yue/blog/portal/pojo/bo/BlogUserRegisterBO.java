package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogUserRegisterBO {
    private String username;
    private String password;
    private String phone;
    private String code;
}
