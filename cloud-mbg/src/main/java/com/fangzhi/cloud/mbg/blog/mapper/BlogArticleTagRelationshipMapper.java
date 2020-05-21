package com.fangzhi.cloud.mbg.blog.mapper;

import com.fangzhi.cloud.mbg.blog.model.BlogArticleTagRelationship;
import com.fangzhi.cloud.mbg.blog.model.BlogArticleTagRelationshipExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

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