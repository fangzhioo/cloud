package com.yue.blog.portal.controller;

import com.yue.blog.common.result.BasePages;
import com.yue.blog.common.result.BaseResult;
import com.yue.blog.portal.pojo.bo.BlogArticleBO;
import com.yue.blog.portal.pojo.dto.BlogArticleSearch;
import com.yue.blog.portal.service.ArticleService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/server/article")
@Api(tags = "文章前端接口")
@Slf4j
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @ApiOperation("list")
    @GetMapping("/list")
    public BasePages list(BlogArticleSearch search){
        List<BlogArticleBO> list = articleService.list(search);
        return BasePages.restPage(list);
    }

    @ApiOperation("publish")
    @PostMapping("/publish")
    public BaseResult publish(@RequestBody BlogArticleBO BlogArticleBo){
        int publish = articleService.publish(BlogArticleBo);
        return BaseResult.success(publish);
    }

    @ApiOperation("getById")
    @GetMapping("/getById")
    public BaseResult getById(@RequestParam(value = "id",required = true)int id){
        BlogArticleBO BlogArticleBo = articleService.getById(id);
        log.info("======getById:"+id);
        return BaseResult.success(BlogArticleBo);
    }

    @ApiOperation("update")
    @PostMapping("/update")
    public BaseResult update(@RequestBody BlogArticleBO BlogArticleBo){
        Integer articleId = articleService.update(BlogArticleBo);
        return BaseResult.success(articleId);
    }

    @ApiOperation("delete")
    @GetMapping("/delete")
    public BaseResult delete(@RequestParam(value = "id",required = true)int id){
        int i = articleService.deleteById(id);
        return BaseResult.success(i);
    }
}
