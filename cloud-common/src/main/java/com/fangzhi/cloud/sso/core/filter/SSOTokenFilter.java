package com.fangzhi.cloud.sso.core.filter;

import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.core.entity.SSOResult;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.core.login.SsoTokenLoginHelper;
import com.fangzhi.cloud.sso.core.path.impl.AntPathMatcher;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.*;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class SSOTokenFilter extends HttpServlet implements Filter {
    private static Logger logger = LoggerFactory.getLogger(SSOTokenFilter.class);

    private static final AntPathMatcher antPathMatcher = new AntPathMatcher();

    private String ssoServer;
    private String logoutPath;
    private String excludedPaths;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

        ssoServer = filterConfig.getInitParameter(SSOConstant.SSO_SERVER);
        logoutPath = filterConfig.getInitParameter(SSOConstant.SSO_LOGOUT_PATH);
        excludedPaths = filterConfig.getInitParameter(SSOConstant.SSO_EXCLUDED_PATHS);

        logger.info("SSOTokenFilter init.");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        // make url
        String servletPath = req.getServletPath();

        // excluded path check
        if (excludedPaths!=null && excludedPaths.trim().length()>0) {
            for (String excludedPath:excludedPaths.split(",")) {
                String uriPattern = excludedPath.trim();

                // 支持ANT表达式
                if (antPathMatcher.match(uriPattern, servletPath)) {
                    // excluded path, allow
                    chain.doFilter(request, response);
                    return;
                }

            }
        }

        // logout filter
        if (logoutPath!=null
                && logoutPath.trim().length()>0
                && logoutPath.equals(servletPath)) {

            // logout
            SsoTokenLoginHelper.logout(req);

            // response
            res.setStatus(HttpServletResponse.SC_OK);
            res.setContentType("application/json;charset=UTF-8");
            res.getWriter().println("{\"code\":"+ SSOResult.SUCCESS_CODE+", \"msg\":\"\"}");

            return;
        }

        // login filter
        SSOUser xxlUser = SsoTokenLoginHelper.loginCheck(req);
        if (xxlUser == null) {

            // response
            res.setStatus(HttpServletResponse.SC_OK);
            res.setContentType("application/json;charset=UTF-8");
            res.getWriter().println("{\"code\":"+SSOConstant.SSO_LOGIN_FAIL_RESULT.getCode()+", \"msg\":\""+ SSOConstant.SSO_LOGIN_FAIL_RESULT.getMsg() +"\""+", \"data\":\""+ ssoServer + SSOConstant.SSO_LOGIN +"\" }");
            return;
        }

        // ser sso user
        request.setAttribute(SSOConstant.SSO_USER, xxlUser);


        // already login, allow
        chain.doFilter(request, response);

    }


}
