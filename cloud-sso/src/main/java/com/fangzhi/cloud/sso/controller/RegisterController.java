package com.fangzhi.cloud.sso.controller;

import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.core.entity.SSOResult;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.core.login.SsoWebLoginHelper;
import com.fangzhi.cloud.sso.core.store.SsoLoginStore;
import com.fangzhi.cloud.sso.core.store.SsoSessionIdHelper;
import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.pojo.bo.SSORegisterUser;
import com.fangzhi.cloud.sso.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
//import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

/**
 * @author fangzhi
 */
@Controller
//@RefreshScope // 支持nacos动态刷新
public class RegisterController {
    @Autowired
    private HttpServletResponse response;
    @Autowired
    private UserService userService;
    @Value("${cloud-sso.register.enabled:false}")
    private Boolean allowRegister;

    @GetMapping("/register")
    public String register(Model model){
        if(!allowRegister){
            model.addAttribute("message", "register is closed by nacos-config-center");
            return "message";
        }
        return "register";
    }

    @RequestMapping("/doRegister")
    public String doRegister(
            Model model,
            String username,
            String nickname,
            String password,
            String confirmPassword
    ){

        SSORegisterUser ssoRegisterUser = new SSORegisterUser(username, password, confirmPassword, nickname);
        SSOResult<CloudUser> result = userService.register(ssoRegisterUser);
        if (result.getCode() != SSOResult.SUCCESS_CODE) {
            model.addAttribute("errorMsg", result.getMsg());
            return "register";
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
        SsoWebLoginHelper.login(response, sessionId, xxlUser, false);

        // 4、return, redirect sessionId
        return "redirect:/" + "?" + SSOConstant.SSO_SESSIONID + "=" + sessionId;
    }



}
