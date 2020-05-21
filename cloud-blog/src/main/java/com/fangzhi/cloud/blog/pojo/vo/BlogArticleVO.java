package com.fangzhi.cloud.blog.pojo.vo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

/**
 * @author fangzhi
 */
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
     * 副标题
     *
     * @mbg.generated
     */
    private String subtitle;

    /**
     * 封面
     *
     * @mbg.generated
     */
    private String cover;

    /**
     * 类目 默认999
     *
     * @mbg.generated
     */
    private Integer cid;

    /**
     * 状态 - 2草稿|1发布|0删除
     *
     * @mbg.generated
     */
    private Integer status;

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
