package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogArticleBO {
    private Integer id;
    private String title;
    private String subTitle;
    private Integer authorId;
    private String authorName;
    private String authorAvatar;
    private String type;
    private String content;
    private String htmlContent;
    private String tags;
    private String categories;
    private String status;
    private Boolean allowComment;
    private Boolean allowPing;
    private Boolean allowFeed;

    private Integer hits = 0;
    private Integer commentsNum = 0;
    private String createdTime;
    private String updateTime;
}
