package com.fangzhi.cloud.blog.dao.mapper;

import com.fangzhi.cloud.blog.dao.model.BlogCommmentReply;
import com.fangzhi.cloud.blog.dao.model.BlogCommmentReplyExample;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface BlogCommmentReplyMapper {
    long countByExample(BlogCommmentReplyExample example);

    int deleteByExample(BlogCommmentReplyExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogCommmentReply record);

    int insertSelective(BlogCommmentReply record);

    List<BlogCommmentReply> selectByExampleWithBLOBs(BlogCommmentReplyExample example);

    List<BlogCommmentReply> selectByExample(BlogCommmentReplyExample example);

    BlogCommmentReply selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogCommmentReply record, @Param("example") BlogCommmentReplyExample example);

    int updateByExampleWithBLOBs(@Param("record") BlogCommmentReply record, @Param("example") BlogCommmentReplyExample example);

    int updateByExample(@Param("record") BlogCommmentReply record, @Param("example") BlogCommmentReplyExample example);

    int updateByPrimaryKeySelective(BlogCommmentReply record);

    int updateByPrimaryKeyWithBLOBs(BlogCommmentReply record);

    int updateByPrimaryKey(BlogCommmentReply record);
}