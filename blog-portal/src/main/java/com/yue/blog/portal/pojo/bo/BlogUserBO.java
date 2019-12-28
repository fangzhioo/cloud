package com.yue.blog.portal.pojo.bo;

import lombok.Data;

@Data
public class BlogUserBO {
    private Integer uid;

    private String username;

    private String email;

    private String homeUrl;

    private String nickName;

    private Integer activated;

    private Integer logged;

    private String groupName;

    private String avatar;
}
