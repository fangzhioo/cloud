package com.fangzhi.cloud.sso.conf;

import com.fangzhi.cloud.sso.core.store.SsoLoginStore;
import com.fangzhi.cloud.sso.core.util.JedisUtil;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class JRedisConf implements InitializingBean, DisposableBean {
    @Value("${cloud-sso.redis.address}")
    private String redisAddress;

    @Value("${cloud-sso.redis.expire.minite}")
    private int redisExpireMinite;

    @Override
    public void afterPropertiesSet() throws Exception {
        SsoLoginStore.setRedisExpireMinite(redisExpireMinite);
        JedisUtil.init(redisAddress);
    }

    @Override
    public void destroy() throws Exception {
        JedisUtil.close();
    }
}
