package com.fangzhi.cloud.blog.service.impl;

import com.fangzhi.cloud.blog.converter.POJOConverter;
import com.fangzhi.cloud.blog.dao.mapper.BlogArticleMapper;
import com.fangzhi.cloud.blog.dao.model.BlogArticle;
import com.fangzhi.cloud.blog.pojo.dto.BlogArticleDTO;
import com.fangzhi.cloud.blog.pojo.query.BlogArticleQuery;
import com.fangzhi.cloud.blog.pojo.vo.BlogArticleVO;
import com.fangzhi.cloud.blog.service.BlogArticleService;
import com.fangzhi.cloud.blog.service.BlogUserService;
import com.fangzhi.cloud.common.base.Preconditions;
import com.fangzhi.cloud.common.enums.CommonErrorCodeEnum;
import com.fangzhi.cloud.sso.pojo.CommonUserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author fangzhi
 */
@Service
public class BlogArticleServiceImpl implements BlogArticleService {

    @Autowired
    private BlogArticleMapper blogArticleMapper;
    @Autowired
    BlogUserService blogUserService;


    @Override
    public BlogArticleVO getById(Integer id) {
        BlogArticle article = blogArticleMapper.selectByPrimaryKey(id);
        Preconditions.checkNotNull(article,CommonErrorCodeEnum.ERROR_CODE_20000);
        return POJOConverter.doToVO(article);
    }

    @Override
    public Integer create(BlogArticleDTO blogArticleDTO) {
        CommonUserInfo currentUser = blogUserService.getCurrentUser();
        Preconditions.checkNotNull(currentUser, CommonErrorCodeEnum.ERROR_CODE_99998);
        BlogArticle article = POJOConverter.dtoToDO(blogArticleDTO);
        article.setAuthorId(currentUser.getUserId());
        article.setAuthorNickname(currentUser.getNickName());
        article.setAuthorAvatar(currentUser.getAvatar());
        return blogArticleMapper.insertSelective(article);
    }

    @Override
    public List<BlogArticleVO> listByQuery(BlogArticleQuery query) {
        List<BlogArticle> blogArticles = blogArticleMapper.listByQuery(query);
        ArrayList<BlogArticleVO> list = new ArrayList<>();
        for (BlogArticle article:blogArticles){
            list.add(POJOConverter.doToVO(article));
        }
        return list;
    }

    @Override
    public Long countByQuery(BlogArticleQuery query) {
        return blogArticleMapper.countByQuery(query);
    }

    @Override
    public Integer delById(Integer id) {
        return null;
    }

    @Override
    public Integer update(BlogArticleDTO blogArticleDTO) {
        return null;
    }
}
