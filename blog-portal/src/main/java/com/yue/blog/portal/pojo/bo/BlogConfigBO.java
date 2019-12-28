package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogConfigBO {
    private Long id;
    private String key;
    private String value;
    private String createdEmp;
    private String lastEmp;
}
