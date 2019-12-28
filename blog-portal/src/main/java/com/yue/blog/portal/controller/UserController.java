package com.yue.blog.portal.controller;

import com.yue.blog.common.result.BaseResult;
import com.yue.blog.portal.pojo.bo.BlogUserBO;
import com.yue.blog.portal.service.UsersService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@RestController
@Api(tags="用户前端接口")
@RequestMapping("/server/user")
@Slf4j
public class UserController {
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private UsersService usersService;

    @GetMapping("/current")
    @ApiOperation("currentUser")
    public BaseResult currentUser(){
        HttpSession session = request.getSession();
        Integer id = (Integer) session.getAttribute("userId");
        BlogUserBO blogUserBo = usersService.getById(id);
        log.info("获取当前用户："+ blogUserBo);
        return BaseResult.success(blogUserBo);
    }

    @PostMapping("/update")
    @ApiOperation("update")
    public BaseResult updateUser(@RequestBody BlogUserBO blogUserBo){
        return BaseResult.success(blogUserBo);
    }

    @GetMapping("/notices")
    @ApiOperation("notices")
    public BaseResult notices(){
        ArrayList<Object> list = new ArrayList<>();
        return BaseResult.success(list);
    }

}
