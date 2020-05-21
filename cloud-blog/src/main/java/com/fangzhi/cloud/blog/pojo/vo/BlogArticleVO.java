package com.fangzhi.cloud.blog.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BlogArticleVO {
    private Integer articleId;
    private String title;
    private String content;
    private Integer authorId;
    private String authorNickname;
    private String authorAvatar;
    /**
     * 所用编辑器 md\rich
     *
     * @mbg.generated
     */
    private String editor;

    /**
     * 主题 md|code
     *
     * @mbg.generated
     */
    private String editorTheme;

    /**
     * 点赞数
     *
     * @mbg.generated
     */
    private Integer userLike;

    /**
     * 创建时间
     *
     * @mbg.generated
     */
    private Date gmtCreate;

    /**
     * 修改时间
     *
     * @mbg.generated
     */
    private Date gmtModified;
}
