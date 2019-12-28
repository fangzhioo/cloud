package com.yue.blog.portal.convertor;

import cn.hutool.core.date.DateUtil;
import com.yue.blog.portal.pojo.bo.*;
import com.yue.blog.dao.model.*;

public class DOBOConvertor {

    public static BlogUserBO doToBO(BlogUserDO usersDO){
        BlogUserBO blogUserBo = new BlogUserBO();
        blogUserBo.setUid(usersDO.getId());
        blogUserBo.setUsername(usersDO.getUsername());
        blogUserBo.setEmail(usersDO.getEmail());
        blogUserBo.setGroupName(usersDO.getGroupName());
        blogUserBo.setHomeUrl(usersDO.getHomeUrl());
        blogUserBo.setActivated(usersDO.getActivated());
        blogUserBo.setLogged(usersDO.getLogged());
        blogUserBo.setNickName(usersDO.getNickname());
        blogUserBo.setAvatar(usersDO.getAvatar());
        return blogUserBo;
    }

    public static BlogConfigBO doToBO(BlogConfigDO dmtSysConfDo){
        BlogConfigBO blogConfigBo = new BlogConfigBO();
        blogConfigBo.setId(dmtSysConfDo.getId());
        blogConfigBo.setKey(dmtSysConfDo.getConfKey());
        blogConfigBo.setValue(dmtSysConfDo.getConfValue());
        blogConfigBo.setCreatedEmp(dmtSysConfDo.getConfCreatedEmp());
        blogConfigBo.setLastEmp(dmtSysConfDo.getConfLastEmp());
        return blogConfigBo;
    }

    public static BlogConfigDO boToDO(BlogConfigBO blogConfigBo){
        BlogConfigDO blogConfigDO = new BlogConfigDO();
        blogConfigDO.setId(blogConfigBo.getId());
        blogConfigDO.setConfKey(blogConfigBo.getKey());
        blogConfigDO.setConfValue(blogConfigBo.getValue());
        return blogConfigDO;
    }

    public static BlogArticleDO boToDO(BlogArticleBO blogArticleBo){
        BlogArticleDO tContentsDO = new BlogArticleDO();
        tContentsDO.setId(blogArticleBo.getId());
        tContentsDO.setTitle(blogArticleBo.getTitle());
        tContentsDO.setSubTitle(blogArticleBo.getSubTitle());
        tContentsDO.setType(blogArticleBo.getType());
        tContentsDO.setContent(blogArticleBo.getContent());
        tContentsDO.setHtmlContent(blogArticleBo.getHtmlContent());
        tContentsDO.setAuthorId(blogArticleBo.getAuthorId());
        tContentsDO.setCategories(blogArticleBo.getCategories());
        tContentsDO.setTags(blogArticleBo.getTags());
        tContentsDO.setAllowComment(blogArticleBo.getAllowComment());
        tContentsDO.setAllowPing(blogArticleBo.getAllowPing());
        tContentsDO.setAllowFeed(blogArticleBo.getAllowFeed());
        tContentsDO.setStatus(blogArticleBo.getStatus());
        return tContentsDO;
    }

    public static BlogArticleBO doToBO(BlogArticleDO tContentsDO){
        BlogArticleBO blogArticleBo = new BlogArticleBO();
        blogArticleBo.setId(tContentsDO.getId());
        blogArticleBo.setTitle(tContentsDO.getTitle());
        blogArticleBo.setSubTitle(tContentsDO.getSubTitle());
        blogArticleBo.setType(tContentsDO.getType());
        blogArticleBo.setContent(tContentsDO.getContent());
        blogArticleBo.setHtmlContent(tContentsDO.getHtmlContent());
        blogArticleBo.setAuthorId(tContentsDO.getAuthorId());
        blogArticleBo.setCategories(tContentsDO.getCategories());
        blogArticleBo.setTags(tContentsDO.getTags());
        blogArticleBo.setAllowComment(tContentsDO.getAllowComment());
        blogArticleBo.setAllowFeed(tContentsDO.getAllowFeed());
        blogArticleBo.setAllowPing(tContentsDO.getAllowPing());
        blogArticleBo.setStatus(tContentsDO.getStatus());
        blogArticleBo.setCommentsNum(tContentsDO.getCommentsNum());
        blogArticleBo.setHits(tContentsDO.getHits());
        blogArticleBo.setCreatedTime(DateUtil.formatDateTime(tContentsDO.getCreatedTime()));
        blogArticleBo.setUpdateTime(DateUtil.formatDateTime(tContentsDO.getUpdateTime()));
        return blogArticleBo;
    }

    public static BlogFileBO doToBO(BlogFileDO blogFileDO){
        BlogFileBO fileBo = new BlogFileBO();
        fileBo.setFileName(blogFileDO.getFileName());
        fileBo.setOwner(blogFileDO.getFileOwner());
        fileBo.setUrl(blogFileDO.getFileUrl());
        fileBo.setOssKey(blogFileDO.getFileOssKey());
        return fileBo;
    }

    public static BlogFileDO boToDO(BlogFileBO fileBo){
        BlogFileDO fileDO = new BlogFileDO();
        fileDO.setFileOssKey(fileBo.getOssKey());
        fileDO.setFileUrl(fileBo.getUrl());
        fileDO.setFileName(fileBo.getFileName());
        fileDO.setFileOwner(fileBo.getOwner());
        return fileDO;
    }

    // pinglun
    public static BlogCommentBO doToBO(BlogCommentDO commentDO){
        BlogCommentBO commentBo = new BlogCommentBO();
        commentBo.setId(commentDO.getId());
        commentBo.setAgree(commentDO.getAgent());
        commentBo.setArticleId(commentDO.getArticleId());
        commentBo.setAuthor(commentDO.getAuthor());
        commentBo.setContent(commentDO.getContent());
        commentBo.setIp(commentDO.getIp());
        commentBo.setMail(commentDO.getMail());
        commentBo.setParentId(commentDO.getParentId());
        commentBo.setStatus(commentDO.getStatus());
        commentBo.setOwnerId(commentDO.getOwnerId());
        commentBo.setAuthorAvatar(commentDO.getAuthorAvatar());
        commentBo.setAuthorId(commentDO.getAuthorId());
        commentBo.setCreatedTime(DateUtil.formatDateTime(commentDO.getCreatedTime()));
        return commentBo;
    }

    public static BlogCommentDO boToDO(BlogCommentBO commentBo){
        BlogCommentDO commentDO = new BlogCommentDO();
        commentDO.setId(commentBo.getId());
        commentDO.setContent(commentBo.getContent());
        commentDO.setIp(commentBo.getIp());
        commentDO.setMail(commentBo.getMail());
        commentDO.setParentId(commentBo.getParentId());
        commentDO.setArticleId(commentBo.getArticleId());
        return commentDO;
    }

    // category
    public static BlogCategoryDO boToDO(BlogCategoryBO categoryBo){
        BlogCategoryDO categoryDO = new BlogCategoryDO();
        categoryDO.setId(categoryBo.getCateId());
        categoryDO.setName(categoryBo.getName());
        categoryDO.setDescription(categoryBo.getDesc());
        categoryDO.setParentId(categoryBo.getParentId());
        categoryDO.setType(categoryBo.getType());
        categoryDO.setSort(categoryBo.getSort());
        return categoryDO;
    }

    public static BlogCategoryBO doToBO(BlogCategoryDO categoryDO){
        BlogCategoryBO bo = new BlogCategoryBO();
        bo.setCateId(categoryDO.getId());
        bo.setName(categoryDO.getName());
        bo.setDesc(categoryDO.getDescription());
        bo.setParentId(categoryDO.getParentId());
        bo.setSort(categoryDO.getSort());
        bo.setType(categoryDO.getType());
        return bo;
    }
}
