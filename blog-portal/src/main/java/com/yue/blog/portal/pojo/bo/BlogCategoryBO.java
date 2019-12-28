package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogCategoryBO {

    private Integer cateId;
    private String name;
    private Integer ParentId;
    private String type;
    private String desc;
    private Integer sort;
}
