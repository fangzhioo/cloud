package com.yue.blog.portal.service.Impl;

import com.github.pagehelper.PageHelper;
import com.google.common.base.Preconditions;
import com.yue.blog.common.enums.ErrorCodeEnum;
import com.yue.blog.dao.mapper.BlogCommentDOMapper;
import com.yue.blog.dao.model.BlogCommentDO;
import com.yue.blog.dao.model.BlogCommentDOExample;
import com.yue.blog.portal.convertor.DOBOConvertor;
import com.yue.blog.portal.pojo.bo.BlogCommentBO;
import com.yue.blog.portal.pojo.bo.BlogUserBO;
import com.yue.blog.portal.pojo.dto.BlogCommentSearch;
import com.yue.blog.portal.service.CommentService;
import com.yue.blog.portal.service.UsersService;
import com.yue.blog.portal.utils.BlogUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    @Autowired
    private BlogCommentDOMapper commentDOMapper;
    @Autowired
    private UsersService usersService;
    @Autowired
    private HttpServletRequest request;

    @Override
    public List<BlogCommentBO> list(BlogCommentSearch search) {
        Preconditions.checkNotNull(search.getArticleId(), ErrorCodeEnum.ERROR_99998);
        PageHelper.startPage(search.getCurrent(),search.getPageSize());
        BlogCommentDOExample example = new BlogCommentDOExample();
        BlogCommentDOExample.Criteria criteria = example.createCriteria();
        criteria.andParentIdEqualTo(search.getParentId());
        criteria.andStatusEqualTo(search.getStatus());
        example.setOrderByClause("created_time desc");
        List<BlogCommentDO> commentDOS = commentDOMapper.selectByExampleWithBLOBs(example);
        List<BlogCommentBO> list = new ArrayList<>();
        for(BlogCommentDO commentDO : commentDOS){
            list.add(DOBOConvertor.doToBO(commentDO));
        }
        return list;
    }

    @Override
    public int publish(BlogCommentBO commentBo) {
        Preconditions.checkNotNull(commentBo.getArticleId(),ErrorCodeEnum.ERROR_99998);
        Preconditions.checkNotNull(commentBo.getContent(),ErrorCodeEnum.ERROR_99998);
        Integer currentUserId = BlogUtils.getCurrentUserId(request);
        Preconditions.checkNotNull(currentUserId,ErrorCodeEnum.ERROR_10006);
        BlogUserBO userBo = usersService.getById(currentUserId);
        BlogCommentDO commentDO = DOBOConvertor.boToDO(commentBo);
        commentDO.setAuthorId(currentUserId);
        commentDO.setId(null);
        commentDO.setIp(request.getRemoteAddr());
        commentDO.setAuthor(userBo.getNickName());
        commentDO.setAuthorAvatar(userBo.getAvatar());
        int i = commentDOMapper.insertSelective(commentDO);
        Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
        return i;
    }

    @Override
    public int delete(Integer id) {
        Integer currentUserId = BlogUtils.getCurrentUserId(request);
        BlogCommentDO commentDO = commentDOMapper.selectByPrimaryKey(id);
        Preconditions.checkNotNull(commentDO,ErrorCodeEnum.ERROR_99999);
        Preconditions.checkState(commentDO.getAuthorId().equals(currentUserId),ErrorCodeEnum.ERROR_99999);
        int i = commentDOMapper.deleteByPrimaryKey(id);
        Preconditions.checkState(i>0,ErrorCodeEnum.ERROR_99999);
        return i;
    }
}
