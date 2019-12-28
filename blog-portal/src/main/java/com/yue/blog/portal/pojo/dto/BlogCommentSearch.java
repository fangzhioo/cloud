package com.yue.blog.portal.pojo.dto;

import lombok.Data;

@Data
public class BlogCommentSearch extends BasePageSearch {
    private Integer articleId;
    private Integer parentId = 0;
    private Byte status = 1;
}
