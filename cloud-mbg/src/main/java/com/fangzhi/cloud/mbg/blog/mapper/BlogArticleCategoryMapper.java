package com.fangzhi.cloud.mbg.blog.mapper;

import com.fangzhi.cloud.mbg.blog.model.BlogArticleCategory;
import com.fangzhi.cloud.mbg.blog.model.BlogArticleCategoryExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

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