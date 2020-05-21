package com.fangzhi.cloud.blog.service;

import com.fangzhi.cloud.blog.pojo.dto.BlogArticleDTO;
import com.fangzhi.cloud.blog.pojo.query.BlogArticleQuery;
import com.fangzhi.cloud.blog.pojo.vo.BlogArticleVO;

import java.util.List;

/**
 * @author fangzhi
 */
public interface BlogArticleService {
    BlogArticleVO getById(Integer id);

    Integer create(BlogArticleDTO blogArticleDTO);

    List<BlogArticleVO> listByQuery(BlogArticleQuery query);

    Integer countByQuery(BlogArticleQuery query);

    Integer delById(Integer id);

    Integer update(BlogArticleDTO blogArticleDTO);
}
