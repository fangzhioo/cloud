package com.yue.blog.dao.mapper;

import com.yue.blog.dao.model.BlogFileDO;
import com.yue.blog.dao.model.BlogFileDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogFileDOMapper {
    long countByExample(BlogFileDOExample example);

    int deleteByExample(BlogFileDOExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogFileDO record);

    int insertSelective(BlogFileDO record);

    List<BlogFileDO> selectByExample(BlogFileDOExample example);

    BlogFileDO selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogFileDO record, @Param("example") BlogFileDOExample example);

    int updateByExample(@Param("record") BlogFileDO record, @Param("example") BlogFileDOExample example);

    int updateByPrimaryKeySelective(BlogFileDO record);

    int updateByPrimaryKey(BlogFileDO record);
}