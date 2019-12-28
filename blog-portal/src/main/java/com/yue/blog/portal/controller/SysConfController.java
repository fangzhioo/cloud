package com.yue.blog.portal.controller;

import com.yue.blog.common.result.BasePages;
import com.yue.blog.common.result.BaseResult;
import com.yue.blog.portal.pojo.bo.BlogConfigBO;
import com.yue.blog.portal.pojo.dto.BlogConfigSearch;
import com.yue.blog.portal.service.SysConfService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags = "系统配置")
@RequestMapping("/server/sys")
public class SysConfController {
    @Autowired
    private SysConfService sysConfService;

    @GetMapping("/getByKey")
    @ApiOperation("getByKey")
    public BaseResult getByKey(@RequestParam(value = "key") String key){
        BlogConfigBO blogConfigBo = sysConfService.getByKey(key);
        return BaseResult.success(blogConfigBo);
    }

    @PostMapping("/update")
    @ApiOperation("update")
    public BaseResult update(@RequestBody BlogConfigBO blogConfigBo){
        BlogConfigBO update = sysConfService.update(blogConfigBo);
        return BaseResult.success(update);
    }

    @PostMapping("/create")
    @ApiOperation("create")
    public BaseResult create(@RequestBody BlogConfigBO blogConfigBo){
        BlogConfigBO bo = sysConfService.create(blogConfigBo);
        return BaseResult.success(bo);
    }

    @GetMapping("/list")
    @ApiOperation("list")
    public BasePages list(BlogConfigSearch blogConfigSearch){
        List<BlogConfigBO> list = sysConfService.list(blogConfigSearch);
        return BasePages.restPage(list);
    }

}
