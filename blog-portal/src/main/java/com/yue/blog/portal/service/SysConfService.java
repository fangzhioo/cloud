package com.yue.blog.portal.service;

import com.yue.blog.portal.pojo.bo.BlogConfigBO;
import com.yue.blog.portal.pojo.dto.BlogConfigSearch;

import java.util.List;

public interface SysConfService {

    /**
     * 获取配置
     * @param key
     * @return
     */
    public BlogConfigBO getByKey(String key);

    /**
     * 获取配置
     * @param key
     * @param blogConfigBo
     * @return
     */
    public BlogConfigBO getByKey(String key, BlogConfigBO blogConfigBo);

    /**
     * 更新配置
     * @param blogConfigBo
     * @return
     */
    public BlogConfigBO update(BlogConfigBO blogConfigBo);

    /**
     * 创建配置
     * @param blogConfigBo
     * @return
     */
    public BlogConfigBO create(BlogConfigBO blogConfigBo);

    public List<BlogConfigBO> list(BlogConfigSearch blogConfigSearch);

}
