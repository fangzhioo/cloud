package com.fangzhi.cloud.sso.controller;

import com.fangzhi.cloud.common.util.StringUtil;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.core.login.SsoWebLoginHelper;
import com.fangzhi.cloud.sso.dao.model.CloudUser;
import com.fangzhi.cloud.sso.core.entity.SSOResult;
import com.fangzhi.cloud.sso.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @author fangzhi
 */
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
        try {
            SSOUser ssoUser = SsoWebLoginHelper.loginCheck(request, response);
            if(ssoUser == null){
                return "redirect:/login";
            }
            SSOResult<CloudUser> user = userService.getUserById(Integer.valueOf(ssoUser.getUserId()));
            model.addAttribute("nickName",ssoUser.getNickName());
            model.addAttribute("userId",ssoUser.getUserId());
            model.addAttribute("userName",ssoUser.getUserName());
            model.addAttribute("expireFreshTime",ssoUser.getExpireFreshTime());
            model.addAttribute("expireMinite",ssoUser.getExpireMinite());
            model.addAttribute("version",ssoUser.getVersion());
            if(user.getCode() == SSOResult.SUCCESS_CODE){
                model.addAttribute("avatar",user.getData().getAvatar());
                model.addAttribute("email",user.getData().getEmail());
                model.addAttribute("phone",user.getData().getPhone());
                model.addAttribute("signature",user.getData().getSignature());
                model.addAttribute("createdTime", StringUtil.formatDate(user.getData().getCreatedTime()));
            }
            return "index";
        }catch (Exception e){
            e.printStackTrace();
            return "redirect:/login";
        }
    }

    @GetMapping("/error")
    public String error(Model model){
        model.addAttribute("message","something is error!!!");
        return "message";
    }

}
