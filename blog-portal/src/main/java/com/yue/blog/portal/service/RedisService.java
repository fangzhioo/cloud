package com.yue.blog.portal.service;

public interface RedisService {

    public void set(String key, String value);

    public String get(String key);

    public Boolean expire(String key, Long expire);

    public void remove(String key);

    public Long increment(String key, Long delta);
}
