package com.yue.blog.portal.pojo.dto;

import lombok.Data;

@Data
public class BasePageSearch {
    private Integer current = 1;
    private Integer pageSize = 10;
}
