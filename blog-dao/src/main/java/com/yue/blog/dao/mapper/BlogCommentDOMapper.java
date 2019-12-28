package com.yue.blog.dao.mapper;

import com.yue.blog.dao.model.BlogCommentDO;
import com.yue.blog.dao.model.BlogCommentDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogCommentDOMapper {
    long countByExample(BlogCommentDOExample example);

    int deleteByExample(BlogCommentDOExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogCommentDO record);

    int insertSelective(BlogCommentDO record);

    List<BlogCommentDO> selectByExampleWithBLOBs(BlogCommentDOExample example);

    List<BlogCommentDO> selectByExample(BlogCommentDOExample example);

    BlogCommentDO selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogCommentDO record, @Param("example") BlogCommentDOExample example);

    int updateByExampleWithBLOBs(@Param("record") BlogCommentDO record, @Param("example") BlogCommentDOExample example);

    int updateByExample(@Param("record") BlogCommentDO record, @Param("example") BlogCommentDOExample example);

    int updateByPrimaryKeySelective(BlogCommentDO record);

    int updateByPrimaryKeyWithBLOBs(BlogCommentDO record);

    int updateByPrimaryKey(BlogCommentDO record);
}