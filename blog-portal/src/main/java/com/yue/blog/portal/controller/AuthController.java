package com.yue.blog.portal.controller;

import com.yue.blog.common.constant.BlogConstants;
import com.yue.blog.common.result.BaseResult;
import com.yue.blog.portal.pojo.bo.BlogUserBO;
import com.yue.blog.portal.pojo.bo.BlogUserLoginBO;
import com.yue.blog.portal.pojo.bo.BlogUserRegisterBO;
import com.yue.blog.portal.service.UsersService;
import com.yue.blog.portal.utils.BlogUtils;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@RestController
@Api(tags = "登陆系统")
@RequestMapping("/server/auth")
@Slf4j
public class AuthController {

    @Autowired
    private UsersService usersService;

    @Autowired
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;
    @Autowired
    private HttpSession httpSession;

    @PostMapping("/login")
    @ApiOperation("login")
    public BaseResult login(@RequestBody BlogUserLoginBO blogUserLoginBo){
        BlogUserBO blogUserBo = usersService.login(blogUserLoginBo.getUserName(), blogUserLoginBo.getPassword());
        HttpSession session = request.getSession();
        session.setAttribute(BlogConstants.LOGIN_SESSION_KEY, blogUserBo);
        if(blogUserLoginBo.getRemeberMe()){
            // setCookie
            BlogUtils.setCookie(response, blogUserBo.getUid());
        }
        session.setAttribute(BlogConstants.SESSION_CURRENT_USER, blogUserBo.getUid());
        // log service
        log.info("用户登录："+ blogUserBo.toString());
        return BaseResult.success(blogUserBo);
    }

    @PostMapping("/register")
    @ApiOperation("register")
    public BaseResult register(BlogUserRegisterBO user){
        int register = usersService.register(user);
        if(register < 0){
            return BaseResult.fail("register fail");
        }
        log.info("用户注册："+user.toString());
        return BaseResult.success("register success!");
    }

    @GetMapping("/getCaptcha")
    @ApiOperation("getCaptcha")
    public BaseResult getCode(@RequestParam(value = "phone",required = true) String phone){
        String code = usersService.getCode(phone);
        // 测试返回code 正式不返回code,发送验证码
        log.info("获取验证码："+code);
        return BaseResult.success(code);
    }

    @GetMapping("/logout")
    @ApiOperation("logout")
    public BaseResult logout(){
        httpSession.removeAttribute(BlogConstants.LOGIN_SESSION_KEY);
        Cookie cookie = new Cookie(BlogConstants.USER_IN_COOKIE,"");
        cookie.setValue(null);
        cookie.setMaxAge(0);
        cookie.setPath("/");
        response.addCookie(cookie);
        return BaseResult.success("success logout");
    }

}
