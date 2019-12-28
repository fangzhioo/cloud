package com.yue.blog.portal.service.Impl;

import com.google.common.base.Preconditions;
import com.yue.blog.common.enums.ErrorCodeEnum;
import com.yue.blog.dao.mapper.BlogCategoryDOMapper;
import com.yue.blog.dao.model.BlogCategoryDO;
import com.yue.blog.dao.model.BlogCategoryDOExample;
import com.yue.blog.portal.convertor.DOBOConvertor;
import com.yue.blog.portal.pojo.bo.BlogCategoryBO;
import com.yue.blog.portal.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private BlogCategoryDOMapper categoryDOMapper;

    @Override
    public BlogCategoryBO get(Integer cateId) {
        BlogCategoryDO categoryDO = categoryDOMapper.selectByPrimaryKey(cateId);
        return DOBOConvertor.doToBO(categoryDO);
    }

    @Override
    public List<BlogCategoryBO> list(Integer parentId) {
        BlogCategoryDOExample example = new BlogCategoryDOExample();
        example.createCriteria().andParentIdEqualTo(parentId);
        example.setOrderByClause("sort desc");
        List<BlogCategoryDO> blogCategoryDOS = categoryDOMapper.selectByExample(example);
        ArrayList<BlogCategoryBO> list = new ArrayList<>();
        for (BlogCategoryDO categoryDO:blogCategoryDOS){
            list.add(DOBOConvertor.doToBO(categoryDO));
        }
        return list;
    }

    @Override
    public int create(BlogCategoryBO categoryBo) {
        Preconditions.checkNotNull(categoryBo.getName(), ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(categoryBo.getParentId(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(categoryBo.getType(),ErrorCodeEnum.ERROR_99998);
        categoryBo.setCateId(0);
        int insert = categoryDOMapper.insertSelective(DOBOConvertor.boToDO(categoryBo));
        Preconditions.checkState(insert>0,ErrorCodeEnum.ERROR_99999);
        return insert;
    }

    @Override
    public int delete(Integer cateId) {
        int i = categoryDOMapper.deleteByPrimaryKey(cateId);
        Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
        return i;
    }

    @Override
    public int update(BlogCategoryBO categoryBo) {
        Preconditions.checkNotNull(categoryBo.getCateId(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(categoryBo.getParentId(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(categoryBo.getName(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(categoryBo.getType(),ErrorCodeEnum.ERROR_99998);
        BlogCategoryDO categoryDO = categoryDOMapper.selectByPrimaryKey(categoryBo.getCateId());
        Preconditions.checkNotNull(categoryDO,ErrorCodeEnum.ERROR_99999);
        BlogCategoryDO categoryDO1 = DOBOConvertor.boToDO(categoryBo);
        int i = categoryDOMapper.updateByPrimaryKey(categoryDO1);
        Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
        return i;
    }
}
