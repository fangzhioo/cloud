package com.yue.blog.dao.mapper;

import com.yue.blog.dao.model.BlogLogDO;
import com.yue.blog.dao.model.BlogLogDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogLogDOMapper {
    long countByExample(BlogLogDOExample example);

    int deleteByExample(BlogLogDOExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogLogDO record);

    int insertSelective(BlogLogDO record);

    List<BlogLogDO> selectByExample(BlogLogDOExample example);

    BlogLogDO selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogLogDO record, @Param("example") BlogLogDOExample example);

    int updateByExample(@Param("record") BlogLogDO record, @Param("example") BlogLogDOExample example);

    int updateByPrimaryKeySelective(BlogLogDO record);

    int updateByPrimaryKey(BlogLogDO record);
}