package com.yue.blog.portal.service.Impl;

import com.github.pagehelper.PageHelper;
import com.google.common.base.Preconditions;
import com.yue.blog.common.enums.ErrorCodeEnum;
import com.yue.blog.dao.mapper.BlogArticleDOMapper;
import com.yue.blog.dao.mapper.BlogUserDOMapper;
import com.yue.blog.dao.model.BlogArticleDO;
import com.yue.blog.dao.model.BlogArticleDOExample;
import com.yue.blog.dao.model.BlogUserDO;
import com.yue.blog.portal.convertor.DOBOConvertor;
import com.yue.blog.portal.pojo.bo.BlogArticleBO;
import com.yue.blog.portal.pojo.dto.BlogArticleSearch;
import com.yue.blog.portal.service.ArticleService;
import com.yue.blog.portal.utils.BlogUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Service
public class ArticleServiceImpl implements ArticleService {
    @Autowired
    private BlogArticleDOMapper blogArticleDOMapper;
    @Autowired
    private BlogUserDOMapper userDOMapper;
    @Autowired
    private HttpServletRequest request;

    @Override
    public int publish(BlogArticleBO blogArticleBo) {
        Preconditions.checkNotNull(blogArticleBo.getTitle(), ErrorCodeEnum.ERROR_20000);
        Preconditions.checkNotNull(blogArticleBo.getContent(), ErrorCodeEnum.ERROR_20001);
        // 获取当前用户
        Integer currentUserId = BlogUtils.getCurrentUserId(request);
        Preconditions.checkNotNull(currentUserId,ErrorCodeEnum.ERROR_10006);
        blogArticleBo.setAuthorId(currentUserId);
        BlogArticleDO BlogArticleDO = DOBOConvertor.boToDO(blogArticleBo);
        int insert = blogArticleDOMapper.insertSelective(BlogArticleDO);
        Preconditions.checkState(insert>=0,ErrorCodeEnum.ERROR_20002);
        return insert;
    }

    @Override
    public List<BlogArticleBO> list(BlogArticleSearch search) {
        PageHelper.startPage(search.getCurrent(),search.getPageSize());
        BlogArticleDOExample example = new BlogArticleDOExample();
        example.setOrderByClause("created_time desc");
        List<BlogArticleDO> blogArticleDOS = blogArticleDOMapper.selectByExample(example);
        ArrayList<BlogArticleBO> blogArticleBOS = new ArrayList<>();
        for(BlogArticleDO blogArticleDO : blogArticleDOS){
            BlogArticleBO articleBO = DOBOConvertor.doToBO(blogArticleDO);
            BlogUserDO blogUserDO = userDOMapper.selectByPrimaryKey(blogArticleDO.getAuthorId());
            articleBO.setAuthorName(blogUserDO.getNickname());
            articleBO.setAuthorAvatar(blogUserDO.getAvatar());
            blogArticleBOS.add(articleBO);
        }
        return blogArticleBOS;
    }

    @Override
    public BlogArticleBO getById(Integer id) {
        Preconditions.checkNotNull(id,ErrorCodeEnum.ERROR_99998);
        BlogArticleDO blogArticleDO = blogArticleDOMapper.selectByPrimaryKey(id);
        Preconditions.checkNotNull(blogArticleDO,ErrorCodeEnum.ERROR_20004);
        BlogArticleBO articleBO = DOBOConvertor.doToBO(blogArticleDO);
        BlogUserDO blogUserDO = userDOMapper.selectByPrimaryKey(blogArticleDO.getAuthorId());
        articleBO.setAuthorName(blogUserDO.getNickname());
        articleBO.setAuthorAvatar(blogUserDO.getAvatar());
        return articleBO;
    }

    @Override
    public Integer update(BlogArticleBO articleBo) {
        Preconditions.checkNotNull(articleBo.getId(), ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(articleBo.getContent(), ErrorCodeEnum.ERROR_99999);
        Preconditions.checkNotNull(articleBo.getTitle(), ErrorCodeEnum.ERROR_99999);
        Preconditions.checkNotNull(articleBo.getAuthorId(), ErrorCodeEnum.ERROR_99999);
        // 获取当前用户
        Integer currentUserId = BlogUtils.getCurrentUserId(request);
        Preconditions.checkState(currentUserId.equals(articleBo.getAuthorId()),ErrorCodeEnum.ERROR_20003);
        BlogArticleDO articleDO = DOBOConvertor.boToDO(articleBo);
        int i = blogArticleDOMapper.insertSelective(articleDO);
        Preconditions.checkState(i>=0,ErrorCodeEnum.ERROR_99999);
        return articleBo.getId();
    }

    @Override
    public int deleteById(Integer id) {
        Preconditions.checkNotNull(id,ErrorCodeEnum.ERROR_99999);
        int i = blogArticleDOMapper.deleteByPrimaryKey(id);
        Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
        return i;
    }
}
