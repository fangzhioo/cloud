package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogUserLoginBO {
    private String userName;
    private String password;
    private Boolean remeberMe = false;
}
