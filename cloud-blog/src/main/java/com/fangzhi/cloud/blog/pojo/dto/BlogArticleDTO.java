package com.fangzhi.cloud.blog.pojo.dto;

import lombok.Data;

@Data
public class BlogArticleDTO {
    /**
     * id
     *
     * @mbg.generated
     */
    private Integer id;

    /**
     * 标题
     *
     * @mbg.generated
     */
    private String title;
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
     * 内容
     *
     * @mbg.generated
     */
    private String content;

    /**
     * 编辑器的内容
     *
     * @mbg.generated
     */
    private String editorContent;
}
