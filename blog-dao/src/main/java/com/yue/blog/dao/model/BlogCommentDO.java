package com.yue.blog.dao.model;

import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Date;

public class BlogCommentDO implements Serializable {
    private Integer id;

    @ApiModelProperty(value = "文章id")
    private Integer articleId;

    @ApiModelProperty(value = "评论人nickname")
    private String author;

    @ApiModelProperty(value = "评论人头像")
    private String authorAvatar;

    @ApiModelProperty(value = "评论人id")
    private Integer authorId;

    @ApiModelProperty(value = "作者id")
    private Integer ownerId;

    @ApiModelProperty(value = "评论评论的id")
    private Integer parentId;

    @ApiModelProperty(value = "点赞")
    private Integer agent;

    @ApiModelProperty(value = "邮件")
    private String mail;

    @ApiModelProperty(value = "地址")
    private String url;

    @ApiModelProperty(value = "ip")
    private String ip;

    @ApiModelProperty(value = "类型")
    private String type;

    @ApiModelProperty(value = "审核状态 1通过0未通过")
    private Byte status;

    private Date createdTime;

    @ApiModelProperty(value = "评论内容")
    private String content;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getArticleId() {
        return articleId;
    }

    public void setArticleId(Integer articleId) {
        this.articleId = articleId;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getAuthorAvatar() {
        return authorAvatar;
    }

    public void setAuthorAvatar(String authorAvatar) {
        this.authorAvatar = authorAvatar;
    }

    public Integer getAuthorId() {
        return authorId;
    }

    public void setAuthorId(Integer authorId) {
        this.authorId = authorId;
    }

    public Integer getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(Integer ownerId) {
        this.ownerId = ownerId;
    }

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Integer getAgent() {
        return agent;
    }

    public void setAgent(Integer agent) {
        this.agent = agent;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", articleId=").append(articleId);
        sb.append(", author=").append(author);
        sb.append(", authorAvatar=").append(authorAvatar);
        sb.append(", authorId=").append(authorId);
        sb.append(", ownerId=").append(ownerId);
        sb.append(", parentId=").append(parentId);
        sb.append(", agent=").append(agent);
        sb.append(", mail=").append(mail);
        sb.append(", url=").append(url);
        sb.append(", ip=").append(ip);
        sb.append(", type=").append(type);
        sb.append(", status=").append(status);
        sb.append(", createdTime=").append(createdTime);
        sb.append(", content=").append(content);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}