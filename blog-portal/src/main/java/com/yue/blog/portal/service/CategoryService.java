package com.yue.blog.portal.service;

import com.yue.blog.portal.pojo.bo.BlogCategoryBO;

import java.util.List;

public interface CategoryService {

    BlogCategoryBO get(Integer cateId);

    List<BlogCategoryBO> list(Integer parentId);

    int create(BlogCategoryBO categoryBo);

    int delete(Integer cateId);

    int update(BlogCategoryBO categoryBo);
}
