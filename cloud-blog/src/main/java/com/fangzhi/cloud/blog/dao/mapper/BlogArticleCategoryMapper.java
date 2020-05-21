package com.fangzhi.cloud.blog.dao.mapper;

import com.fangzhi.cloud.blog.dao.model.BlogArticleCategory;
import com.fangzhi.cloud.blog.dao.model.BlogArticleCategoryExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlogArticleCategoryMapper {
    long countByExample(BlogArticleCategoryExample example);

    int deleteByExample(BlogArticleCategoryExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogArticleCategory record);

    int insertSelective(BlogArticleCategory record);

    List<BlogArticleCategory> selectByExample(BlogArticleCategoryExample example);

    BlogArticleCategory selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogArticleCategory record, @Param("example") BlogArticleCategoryExample example);

    int updateByExample(@Param("record") BlogArticleCategory record, @Param("example") BlogArticleCategoryExample example);

    int updateByPrimaryKeySelective(BlogArticleCategory record);

    int updateByPrimaryKey(BlogArticleCategory record);
}