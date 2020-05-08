package com.fangzhi.cloud.sso.controller;

import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.core.login.SsoWebLoginHelper;
import com.fangzhi.cloud.sso.core.store.SsoLoginStore;
import com.fangzhi.cloud.sso.core.store.SsoSessionIdHelper;
import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.pojo.bo.SSOLoginUser;
import com.fangzhi.cloud.sso.core.entity.SSOResult;
import com.fangzhi.cloud.sso.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Controller
public class MainController {
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;
    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String root(Model model){
        model.addAttribute("user","fangzhi");
        return "index";
    }

    @GetMapping(SSOConstant.SSO_LOGIN)
    public String login(Model model){
        // login check
        SSOUser ssoUser = SsoWebLoginHelper.loginCheck(request, response);

        if (ssoUser != null) {

            // success redirect
            String redirectUrl = request.getParameter(SSOConstant.REDIRECT_URL);
            if (redirectUrl!=null && redirectUrl.trim().length()>0) {

                String sessionId = SsoWebLoginHelper.getSessionIdByCookie(request);
                String redirectUrlFinal = redirectUrl + "?" + SSOConstant.SSO_SESSIONID + "=" + sessionId;;

                return "redirect:" + redirectUrlFinal;
            } else {
                return "redirect:/";
            }
        }
        model.addAttribute("errorMsg", request.getParameter("errorMsg"));
        model.addAttribute(SSOConstant.REDIRECT_URL, request.getParameter(SSOConstant.REDIRECT_URL));
        return "login";
    }

    @RequestMapping("/doLogin")
    public String doLogin(RedirectAttributes redirectAttributes,
                          String username,
                          String password,
                          boolean remember){
        SSOLoginUser ssoLoginUser = new SSOLoginUser(username, password, remember);
        // valid login
        SSOResult<CloudUser> result = userService.login(ssoLoginUser);
        if (result.getCode() != SSOResult.SUCCESS_CODE) {
            redirectAttributes.addAttribute("errorMsg", result.getMsg());

            redirectAttributes.addAttribute(SSOConstant.REDIRECT_URL, request.getParameter(SSOConstant.REDIRECT_URL));
            return "redirect:/login";
        }

        // 1、make xxl-sso user
        SSOUser xxlUser = new SSOUser();
        xxlUser.setUserId(String.valueOf(result.getData().getId()));
        xxlUser.setUserName(result.getData().getUsername());
        xxlUser.setNickName(result.getData().getNickname());
        xxlUser.setVersion(UUID.randomUUID().toString().replaceAll("-", ""));
        xxlUser.setExpireMinite(SsoLoginStore.getRedisExpireMinite());
        xxlUser.setExpireFreshTime(System.currentTimeMillis());

        // 2、make session id
        String sessionId = SsoSessionIdHelper.makeSessionId(xxlUser);

        // 3、login, store storeKey + cookie sessionId
        SsoWebLoginHelper.login(response, sessionId, xxlUser, ssoLoginUser.getRemember());

        // 4、return, redirect sessionId
        String redirectUrl = request.getParameter(SSOConstant.REDIRECT_URL);
        if (redirectUrl!=null && redirectUrl.trim().length()>0) {
            String redirectUrlFinal = redirectUrl + "?" + SSOConstant.SSO_SESSIONID + "=" + sessionId;
            return "redirect:" + redirectUrlFinal;
        } else {
            return "redirect:/";
        }
    }


    @GetMapping(SSOConstant.SSO_LOGOUT)
    public String logout(RedirectAttributes redirectAttributes) {

        // logout
        SsoWebLoginHelper.logout(request, response);

        redirectAttributes.addAttribute(SSOConstant.REDIRECT_URL, request.getParameter(SSOConstant.REDIRECT_URL));
        return "redirect:/login";
    }
}
