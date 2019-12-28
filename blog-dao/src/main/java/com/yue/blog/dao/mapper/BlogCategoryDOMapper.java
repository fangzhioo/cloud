package com.yue.blog.dao.mapper;

import com.yue.blog.dao.model.BlogCategoryDO;
import com.yue.blog.dao.model.BlogCategoryDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogCategoryDOMapper {
    long countByExample(BlogCategoryDOExample example);

    int deleteByExample(BlogCategoryDOExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogCategoryDO record);

    int insertSelective(BlogCategoryDO record);

    List<BlogCategoryDO> selectByExample(BlogCategoryDOExample example);

    BlogCategoryDO selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogCategoryDO record, @Param("example") BlogCategoryDOExample example);

    int updateByExample(@Param("record") BlogCategoryDO record, @Param("example") BlogCategoryDOExample example);

    int updateByPrimaryKeySelective(BlogCategoryDO record);

    int updateByPrimaryKey(BlogCategoryDO record);
}