package com.yue.blog.dao.mapper;

import com.yue.blog.dao.model.BlogConfigDO;
import com.yue.blog.dao.model.BlogConfigDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogConfigDOMapper {
    long countByExample(BlogConfigDOExample example);

    int deleteByExample(BlogConfigDOExample example);

    int deleteByPrimaryKey(Long id);

    int insert(BlogConfigDO record);

    int insertSelective(BlogConfigDO record);

    List<BlogConfigDO> selectByExampleWithBLOBs(BlogConfigDOExample example);

    List<BlogConfigDO> selectByExample(BlogConfigDOExample example);

    BlogConfigDO selectByPrimaryKey(Long id);

    int updateByExampleSelective(@Param("record") BlogConfigDO record, @Param("example") BlogConfigDOExample example);

    int updateByExampleWithBLOBs(@Param("record") BlogConfigDO record, @Param("example") BlogConfigDOExample example);

    int updateByExample(@Param("record") BlogConfigDO record, @Param("example") BlogConfigDOExample example);

    int updateByPrimaryKeySelective(BlogConfigDO record);

    int updateByPrimaryKeyWithBLOBs(BlogConfigDO record);

    int updateByPrimaryKey(BlogConfigDO record);
}