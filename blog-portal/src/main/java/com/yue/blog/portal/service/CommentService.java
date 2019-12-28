package com.yue.blog.portal.service;


import com.yue.blog.portal.pojo.bo.BlogCommentBO;
import com.yue.blog.portal.pojo.dto.BlogCommentSearch;

import java.util.List;


public interface CommentService {
    List<BlogCommentBO> list(BlogCommentSearch search);

    int publish(BlogCommentBO commentBo);

    int delete(Integer id);
}
