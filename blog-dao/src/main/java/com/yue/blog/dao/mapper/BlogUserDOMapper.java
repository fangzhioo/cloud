package com.yue.blog.dao.mapper;

import com.yue.blog.dao.model.BlogUserDO;
import com.yue.blog.dao.model.BlogUserDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogUserDOMapper {
    long countByExample(BlogUserDOExample example);

    int deleteByExample(BlogUserDOExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogUserDO record);

    int insertSelective(BlogUserDO record);

    List<BlogUserDO> selectByExample(BlogUserDOExample example);

    BlogUserDO selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogUserDO record, @Param("example") BlogUserDOExample example);

    int updateByExample(@Param("record") BlogUserDO record, @Param("example") BlogUserDOExample example);

    int updateByPrimaryKeySelective(BlogUserDO record);

    int updateByPrimaryKey(BlogUserDO record);
}