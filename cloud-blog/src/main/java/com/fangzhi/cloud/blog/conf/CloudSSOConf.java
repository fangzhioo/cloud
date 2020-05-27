package com.fangzhi.cloud.blog.conf;

import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.core.filter.SSOWebFilter;
import com.fangzhi.cloud.sso.core.util.JedisUtil;
import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author fangzhi
 */
@Configuration
public class CloudSSOConf implements DisposableBean {
    @Value("${cloud-sso.server}")
    private String xxlSsoServer;

    @Value("${cloud-sso.logout.path}")
    private String xxlSsoLogoutPath;

    @Value("${cloud-sso.excluded.paths}")
    private String xxlSsoExcludedPaths;

    @Value("${cloud-sso.redis.address}")
    private String xxlSsoRedisAddress;

    private String[] urlPatterns = {
//            "/api/login",
//            "/api/logout"
    };

    @Bean
    public FilterRegistrationBean<SSOWebFilter> xxlSsoFilterRegistration() {

        // xxl-sso, redis init
        JedisUtil.init(xxlSsoRedisAddress);

        // xxl-sso, filter init
        FilterRegistrationBean<SSOWebFilter> registration = new FilterRegistrationBean<>();

        registration.setName("SSOWebFilter");
        registration.setOrder(1);
        registration.addUrlPatterns(urlPatterns);
        registration.setFilter(new SSOWebFilter());
        registration.addInitParameter(SSOConstant.SSO_SERVER, xxlSsoServer);
        registration.addInitParameter(SSOConstant.SSO_LOGOUT_PATH, xxlSsoLogoutPath);
        registration.addInitParameter(SSOConstant.SSO_EXCLUDED_PATHS, xxlSsoExcludedPaths);

        return registration;
    }

    @Override
    public void destroy() throws Exception {

        // xxl-sso, redis close
        JedisUtil.close();
    }
}
