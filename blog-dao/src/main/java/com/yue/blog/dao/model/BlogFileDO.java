package com.yue.blog.dao.model;

import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Date;

public class BlogFileDO implements Serializable {
    private Integer id;

    @ApiModelProperty(value = "文件名")
    private String fileName;

    @ApiModelProperty(value = "ossKey")
    private String fileOssKey;

    @ApiModelProperty(value = "地址")
    private String fileUrl;

    @ApiModelProperty(value = "类型")
    private String fileType;

    @ApiModelProperty(value = "所属人")
    private Integer fileOwner;

    @ApiModelProperty(value = "上传时间")
    private Date createdTime;

    private static final long serialVersionUID = 1L;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getFileOssKey() {
        return fileOssKey;
    }

    public void setFileOssKey(String fileOssKey) {
        this.fileOssKey = fileOssKey;
    }

    public String getFileUrl() {
        return fileUrl;
    }

    public void setFileUrl(String fileUrl) {
        this.fileUrl = fileUrl;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public Integer getFileOwner() {
        return fileOwner;
    }

    public void setFileOwner(Integer fileOwner) {
        this.fileOwner = fileOwner;
    }

    public Date getCreatedTime() {
        return createdTime;
    }

    public void setCreatedTime(Date createdTime) {
        this.createdTime = createdTime;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", fileName=").append(fileName);
        sb.append(", fileOssKey=").append(fileOssKey);
        sb.append(", fileUrl=").append(fileUrl);
        sb.append(", fileType=").append(fileType);
        sb.append(", fileOwner=").append(fileOwner);
        sb.append(", createdTime=").append(createdTime);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}