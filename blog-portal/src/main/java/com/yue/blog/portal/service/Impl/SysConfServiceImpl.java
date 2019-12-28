package com.yue.blog.portal.service.Impl;

import cn.hutool.core.util.StrUtil;
import com.github.pagehelper.PageHelper;
import com.google.common.base.Preconditions;
import com.yue.blog.common.enums.ErrorCodeEnum;
import com.yue.blog.dao.mapper.BlogConfigDOMapper;
import com.yue.blog.dao.model.BlogConfigDO;
import com.yue.blog.dao.model.BlogConfigDOExample;
import com.yue.blog.portal.convertor.DOBOConvertor;
import com.yue.blog.portal.pojo.bo.BlogConfigBO;
import com.yue.blog.portal.pojo.dto.BlogConfigSearch;
import com.yue.blog.portal.service.SysConfService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class SysConfServiceImpl implements SysConfService {

    @Autowired
    private BlogConfigDOMapper blogConfigDOMapper;

    @Override
    public BlogConfigBO getByKey(String key) {
        return this.getByKey(key,new BlogConfigBO());
    }

    @Override
    public BlogConfigBO getByKey(String key, BlogConfigBO blogConfigBo) {
        if(StrUtil.isEmpty(key)){
            return blogConfigBo;
        }
        log.info("查询配置-=====："+key);
        BlogConfigDOExample example = new BlogConfigDOExample();
        example.createCriteria().andConfKeyEqualTo(key);
        List<BlogConfigDO> list = blogConfigDOMapper.selectByExampleWithBLOBs(example);
        if(list.size() == 0){
            return blogConfigBo;
        }
        return DOBOConvertor.doToBO(list.get(0));
    }

    @Override
    public BlogConfigBO update(BlogConfigBO blogConfigBo) {
        Preconditions.checkNotNull(blogConfigBo.getId(), ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(blogConfigBo.getKey(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(blogConfigBo.getValue(),ErrorCodeEnum.ERROR_99998);
        BlogConfigDO oldDo = blogConfigDOMapper.selectByPrimaryKey(blogConfigBo.getId());
        Preconditions.checkNotNull(oldDo,ErrorCodeEnum.ERROR_99999);
        log.info("更新配置======：do："+oldDo);
        BlogConfigDO BlogConfigDO = DOBOConvertor.boToDO(blogConfigBo);
        BlogConfigDO.setConfBackValue(oldDo.getConfValue());
        BlogConfigDO.setConfLastEmp("xiugaizhe-fangzhi");
        int result = blogConfigDOMapper.insert(BlogConfigDO);
        return result>0? blogConfigBo :null;
    }

    @Override
    public BlogConfigBO create(BlogConfigBO blogConfigBo) {
        Preconditions.checkNotNull(blogConfigBo.getKey(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(blogConfigBo.getValue(),ErrorCodeEnum.ERROR_99998);
        BlogConfigBO oldConf = this.getByKey(blogConfigBo.getKey());
        Preconditions.checkNotNull(oldConf.getKey(),ErrorCodeEnum.ERROR_99999);
        log.info("创建配置======do："+ blogConfigBo);
        BlogConfigDO BlogConfigDO = DOBOConvertor.boToDO(blogConfigBo);
        BlogConfigDO.setConfCreatedEmp("fangzhi");
        BlogConfigDO.setConfLastEmp("fangzhi");
        BlogConfigDO.setConfBackValue(blogConfigBo.getValue());
        int result = blogConfigDOMapper.insert(BlogConfigDO);
        return result>0 ? blogConfigBo :null;
    }

    @Override
    public List<BlogConfigBO> list(BlogConfigSearch blogConfigSearch) {
        Preconditions.checkNotNull(blogConfigSearch.getCurrent(),ErrorCodeEnum.ERROR_99999);
        Preconditions.checkNotNull(blogConfigSearch.getPageSize(),ErrorCodeEnum.ERROR_99999);
        PageHelper.startPage(blogConfigSearch.getCurrent(), blogConfigSearch.getPageSize());
        BlogConfigDOExample example = new BlogConfigDOExample();
        if(StrUtil.isNotBlank(blogConfigSearch.getKey())){
            example.createCriteria().andConfKeyEqualTo(blogConfigSearch.getKey());
        }
        example.setOrderByClause("id desc");
        List<BlogConfigDO> list = blogConfigDOMapper.selectByExampleWithBLOBs(example);
        List<BlogConfigBO> blogConfigBOS = new ArrayList<>();
        for(BlogConfigDO BlogConfigDO : list){
            blogConfigBOS.add(DOBOConvertor.doToBO(BlogConfigDO));
        }
        return blogConfigBOS;
    }
}
