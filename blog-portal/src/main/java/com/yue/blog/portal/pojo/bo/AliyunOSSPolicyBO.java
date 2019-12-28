package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class AliyunOSSPolicyBO {
    private String dir;
    private Long expire;
    private String host;
    private String accessId;
    private String policy;
    private String signature;
}
