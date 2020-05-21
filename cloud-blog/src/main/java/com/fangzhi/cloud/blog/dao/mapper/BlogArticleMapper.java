package com.fangzhi.cloud.blog.dao.mapper;

import com.fangzhi.cloud.blog.dao.model.BlogArticle;
import com.fangzhi.cloud.blog.dao.model.BlogArticleExample;
import com.fangzhi.cloud.blog.pojo.query.BlogArticleQuery;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlogArticleMapper {
    long countByExample(BlogArticleExample example);

    int deleteByExample(BlogArticleExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogArticle record);

    int insertSelective(BlogArticle record);

    List<BlogArticle> selectByExampleWithBLOBs(BlogArticleExample example);

    List<BlogArticle> selectByExample(BlogArticleExample example);

    BlogArticle selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogArticle record, @Param("example") BlogArticleExample example);

    int updateByExampleWithBLOBs(@Param("record") BlogArticle record, @Param("example") BlogArticleExample example);

    int updateByExample(@Param("record") BlogArticle record, @Param("example") BlogArticleExample example);

    int updateByPrimaryKeySelective(BlogArticle record);

    int updateByPrimaryKeyWithBLOBs(BlogArticle record);

    int updateByPrimaryKey(BlogArticle record);

    List<BlogArticle> listByQuery(BlogArticleQuery query);
}