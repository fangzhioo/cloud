package com.fangzhi.cloud.blog.dao.mapper;

import com.fangzhi.cloud.blog.dao.model.BlogArticleTagRelationship;
import com.fangzhi.cloud.blog.dao.model.BlogArticleTagRelationshipExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlogArticleTagRelationshipMapper {
    long countByExample(BlogArticleTagRelationshipExample example);

    int deleteByExample(BlogArticleTagRelationshipExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogArticleTagRelationship record);

    int insertSelective(BlogArticleTagRelationship record);

    List<BlogArticleTagRelationship> selectByExample(BlogArticleTagRelationshipExample example);

    BlogArticleTagRelationship selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogArticleTagRelationship record, @Param("example") BlogArticleTagRelationshipExample example);

    int updateByExample(@Param("record") BlogArticleTagRelationship record, @Param("example") BlogArticleTagRelationshipExample example);

    int updateByPrimaryKeySelective(BlogArticleTagRelationship record);

    int updateByPrimaryKey(BlogArticleTagRelationship record);
}