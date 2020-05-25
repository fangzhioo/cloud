package com.fangzhi.cloud.blog.controller;

import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @author fangzhi
 */
@Controller
public class MainController {
    @Autowired
    private HttpServletRequest request;

    @GetMapping("/")
    public String poster(){
        return "poster";
    }

    @GetMapping("/blog/**")
    public String root(Model model){
        try {
            SSOUser ssoUser = CloudSSOUtil.getSSOUser(request);
            model.addAttribute("userId", ssoUser.getUserId());
            model.addAttribute("nickname",ssoUser.getNickName());
            return "index";
        }catch (Exception e){
            model.addAttribute("userId", "");
            model.addAttribute("nickname", "guest");
            return "index";
        }
    }
}
