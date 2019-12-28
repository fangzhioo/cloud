package com.yue.blog.dao.mapper;

import com.yue.blog.dao.model.BlogArticleDO;
import com.yue.blog.dao.model.BlogArticleDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogArticleDOMapper {
    long countByExample(BlogArticleDOExample example);

    int deleteByExample(BlogArticleDOExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogArticleDO record);

    int insertSelective(BlogArticleDO record);

    List<BlogArticleDO> selectByExampleWithBLOBs(BlogArticleDOExample example);

    List<BlogArticleDO> selectByExample(BlogArticleDOExample example);

    BlogArticleDO selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogArticleDO record, @Param("example") BlogArticleDOExample example);

    int updateByExampleWithBLOBs(@Param("record") BlogArticleDO record, @Param("example") BlogArticleDOExample example);

    int updateByExample(@Param("record") BlogArticleDO record, @Param("example") BlogArticleDOExample example);

    int updateByPrimaryKeySelective(BlogArticleDO record);

    int updateByPrimaryKeyWithBLOBs(BlogArticleDO record);

    int updateByPrimaryKey(BlogArticleDO record);
}