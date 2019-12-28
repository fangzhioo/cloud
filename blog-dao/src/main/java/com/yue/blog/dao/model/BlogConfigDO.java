package com.yue.blog.dao.model;

import io.swagger.annotations.ApiModelProperty;
import java.io.Serializable;
import java.util.Date;

public class BlogConfigDO implements Serializable {
    @ApiModelProperty(value = "主键")
    private Long id;

    @ApiModelProperty(value = "创建时间")
    private Date gmtCreate;

    @ApiModelProperty(value = "修改时间")
    private Date gmtModified;

    @ApiModelProperty(value = "键名key(主键)")
    private String confKey;

    @ApiModelProperty(value = "创建者")
    private String confCreatedEmp;

    @ApiModelProperty(value = "最后修改者")
    private String confLastEmp;

    @ApiModelProperty(value = "键值value")
    private String confValue;

    @ApiModelProperty(value = "备份上一次修改之前的值（回滚）")
    private String confBackValue;

    private static final long serialVersionUID = 1L;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getGmtCreate() {
        return gmtCreate;
    }

    public void setGmtCreate(Date gmtCreate) {
        this.gmtCreate = gmtCreate;
    }

    public Date getGmtModified() {
        return gmtModified;
    }

    public void setGmtModified(Date gmtModified) {
        this.gmtModified = gmtModified;
    }

    public String getConfKey() {
        return confKey;
    }

    public void setConfKey(String confKey) {
        this.confKey = confKey;
    }

    public String getConfCreatedEmp() {
        return confCreatedEmp;
    }

    public void setConfCreatedEmp(String confCreatedEmp) {
        this.confCreatedEmp = confCreatedEmp;
    }

    public String getConfLastEmp() {
        return confLastEmp;
    }

    public void setConfLastEmp(String confLastEmp) {
        this.confLastEmp = confLastEmp;
    }

    public String getConfValue() {
        return confValue;
    }

    public void setConfValue(String confValue) {
        this.confValue = confValue;
    }

    public String getConfBackValue() {
        return confBackValue;
    }

    public void setConfBackValue(String confBackValue) {
        this.confBackValue = confBackValue;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", gmtCreate=").append(gmtCreate);
        sb.append(", gmtModified=").append(gmtModified);
        sb.append(", confKey=").append(confKey);
        sb.append(", confCreatedEmp=").append(confCreatedEmp);
        sb.append(", confLastEmp=").append(confLastEmp);
        sb.append(", confValue=").append(confValue);
        sb.append(", confBackValue=").append(confBackValue);
        sb.append(", serialVersionUID=").append(serialVersionUID);
        sb.append("]");
        return sb.toString();
    }
}