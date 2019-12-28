package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogFileBO {
    private String fileName;
    private String url;
    private String ossKey;
    private Integer owner;
}
