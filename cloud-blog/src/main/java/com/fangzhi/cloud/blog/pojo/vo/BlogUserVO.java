package com.fangzhi.cloud.blog.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BlogUserVO {
    private String userId;
    private String userName;
    private String nickName;
    private String avatar;
}
