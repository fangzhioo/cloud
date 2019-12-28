package com.yue.blog.dao.model;

import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Date;

public class BlogArticleDO implements Serializable {
    private Integer id;

    @ApiModelProperty(value = "标题")
    private String title;

    @ApiModelProperty(value = "副标题")
    private String subTitle;

    @ApiModelProperty(value = "作者")
    private Integer authorId;

    @ApiModelProperty(value = "文章内容类型 md=markdown；editor=富文本")
    private String type;

    @ApiModelProperty(value = "文章状态 draft=草稿 publish=已发布")
    private String status;

    @ApiModelProperty(value = "标签")
    private String tags;

    @ApiModelProperty(value = "分类")
    private String categories;

    @ApiModelProperty(value = "点击量")
    private Integer hits;

    @ApiModelProperty(value = "评论数")
    private Integer commentsNum;

    @ApiModelProperty(value = "是否允许评论")
    private Boolean allowComment;

    @ApiModelProperty(value = "允许Ping")
    private Boolean allowPing;

    @ApiModelProperty(value = "允许订阅")
    private Boolean allowFeed;

    private Date createdTime;

    private Date updateTime;

    @ApiModelProperty(value = "编辑的内容")
    private String content;

    @ApiModelProperty(value = "显示的html内容")
    private String htmlContent;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public String getCategories() {
        return categories;
    }

    public void setCategories(String categories) {
        this.categories = categories;
    }

    public Integer getHits() {
        return hits;
    }

    public void setHits(Integer hits) {
        this.hits = hits;
    }

    public Integer getCommentsNum() {
        return commentsNum;
    }

    public void setCommentsNum(Integer commentsNum) {
        this.commentsNum = commentsNum;
    }

    public Boolean getAllowComment() {
        return allowComment;
    }

    public void setAllowComment(Boolean allowComment) {
        this.allowComment = allowComment;
    }

    public Boolean getAllowPing() {
        return allowPing;
    }

    public void setAllowPing(Boolean allowPing) {
        this.allowPing = allowPing;
    }

    public Boolean getAllowFeed() {
        return allowFeed;
    }

    public void setAllowFeed(Boolean allowFeed) {
        this.allowFeed = allowFeed;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getHtmlContent() {
        return htmlContent;
    }

    public void setHtmlContent(String htmlContent) {
        this.htmlContent = htmlContent;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", title=").append(title);
        sb.append(", subTitle=").append(subTitle);
        sb.append(", authorId=").append(authorId);
        sb.append(", type=").append(type);
        sb.append(", status=").append(status);
        sb.append(", tags=").append(tags);
        sb.append(", categories=").append(categories);
        sb.append(", hits=").append(hits);
        sb.append(", commentsNum=").append(commentsNum);
        sb.append(", allowComment=").append(allowComment);
        sb.append(", allowPing=").append(allowPing);
        sb.append(", allowFeed=").append(allowFeed);
        sb.append(", createdTime=").append(createdTime);
        sb.append(", updateTime=").append(updateTime);
        sb.append(", content=").append(content);
        sb.append(", htmlContent=").append(htmlContent);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}