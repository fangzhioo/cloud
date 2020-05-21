package com.fangzhi.cloud.blog.converter;

import com.fangzhi.cloud.blog.dao.model.BlogArticle;
import com.fangzhi.cloud.blog.pojo.dto.BlogArticleDTO;
import com.fangzhi.cloud.blog.pojo.vo.BlogArticleVO;

/**
 * @author fangzhi
 */
public class POJOConverter {

    /**
     * BlogArticle to BlogArticleVO
     * @param article
     * @return
     */
    public static BlogArticleVO doToVO(BlogArticle article){
        return BlogArticleVO.builder()
                .articleId(article.getId())
                .authorAvatar(article.getAuthorAvatar())
                .authorId(article.getAuthorId())
                .authorNickname(article.getAuthorNickname())
                .content(article.getContent())
                .editor(article.getEditor())
                .editorTheme(article.getEditorTheme())
                .title(article.getTitle())
                .subtitle(article.getSubtitle())
                .cover(article.getCover())
                .cid(article.getCid())
                .status(article.getStatus())
                .userLike(article.getUserLike())
                .gmtCreate(article.getGmtCreate())
                .gmtModified(article.getGmtModified())
                .build();
    }

    /**
     * BlogArticleDTO to BlogArticle
     * @param articleDTO
     * @return
     */
    public static BlogArticle dtoToDO(BlogArticleDTO articleDTO){
        BlogArticle article = new BlogArticle();
        article.setId(articleDTO.getId());
        article.setTitle(articleDTO.getTitle());
        article.setContent(articleDTO.getContent());
        article.setEditor(articleDTO.getEditor());
        article.setEditorContent(articleDTO.getEditorContent());
        article.setEditorTheme(articleDTO.getEditorTheme());
        article.setSubtitle(articleDTO.getSubtitle());
        article.setCid(articleDTO.getCid());
        article.setCover(article.getCover());
        return article;
    }
}
