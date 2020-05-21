package com.fangzhi.cloud.mbg.blog.mapper;

import com.fangzhi.cloud.mbg.blog.model.BlogComment;
import com.fangzhi.cloud.mbg.blog.model.BlogCommentExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface BlogCommentMapper {
    long countByExample(BlogCommentExample example);

    int deleteByExample(BlogCommentExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(BlogComment record);

    int insertSelective(BlogComment record);

    List<BlogComment> selectByExampleWithBLOBs(BlogCommentExample example);

    List<BlogComment> selectByExample(BlogCommentExample example);

    BlogComment selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") BlogComment record, @Param("example") BlogCommentExample example);

    int updateByExampleWithBLOBs(@Param("record") BlogComment record, @Param("example") BlogCommentExample example);

    int updateByExample(@Param("record") BlogComment record, @Param("example") BlogCommentExample example);

    int updateByPrimaryKeySelective(BlogComment record);

    int updateByPrimaryKeyWithBLOBs(BlogComment record);

    int updateByPrimaryKey(BlogComment record);
}