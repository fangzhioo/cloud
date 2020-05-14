package com.fangzhi.cloud.blog.pojo.bo;

import lombok.Data;

@Data
public class AliyunOssAntdPolicyBo {
    private String dir;
    private Long expire;
    private String host;
    private String accessId;
    private String policy;
    private String signature;
}
