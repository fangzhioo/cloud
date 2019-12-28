package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogCommentBO {
    private Integer id;
    private Integer articleId;
    private Integer ownerId;
    private String author;
    private Integer authorId;
    private String authorAvatar;
    private Integer parentId = 0;
    private Byte status=0;
    private Integer agree = 0;
    private String content;
    private String mail;
    private String ip;
    private String createdTime;
}
