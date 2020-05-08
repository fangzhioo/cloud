package com.fangzhi.cloud.blog.controller.web;

import com.fangzhi.cloud.blog.pojo.vo.BlogUserVO;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.util.CloudSSOUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    HttpServletRequest request;

    @GetMapping("/currentUser")
    public CommonResult<BlogUserVO> currentUser(){
        SSOUser ssoUser = CloudSSOUtil.getSSOUser(request);
        if(ssoUser == null){
            return CommonResult.success(new BlogUserVO(null,null, "guest","https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"));
        }
        BlogUserVO blogUserVO = new BlogUserVO();
        blogUserVO.setUserId(ssoUser.getUserId());
        blogUserVO.setUserName(ssoUser.getUserName());
        blogUserVO.setNickName(ssoUser.getNickName());
        blogUserVO.setAvatar("https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png");
        return CommonResult.success(blogUserVO);
    }


}
