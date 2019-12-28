package com.yue.blog.portal.service;


import com.yue.blog.portal.pojo.bo.BlogArticleBO;
import com.yue.blog.portal.pojo.dto.BlogArticleSearch;

import java.util.List;

public interface ArticleService {

    /**
     * publish
     * @param BlogArticleBo
     * @return
     */
    int publish(BlogArticleBO BlogArticleBo);

    List<BlogArticleBO> list(BlogArticleSearch search);

    BlogArticleBO getById(Integer id);

    Integer update(BlogArticleBO BlogArticleBo);

    int deleteById(Integer id);

}
