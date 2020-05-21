package com.fangzhi.cloud.blog.controller.web;

import com.fangzhi.cloud.blog.pojo.dto.BlogArticleDTO;
import com.fangzhi.cloud.blog.pojo.query.BlogArticleQuery;
import com.fangzhi.cloud.blog.pojo.vo.BlogArticleVO;
import com.fangzhi.cloud.blog.service.BlogArticleService;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author fangzhi
 */
@RestController
@RequestMapping("/api/article")
public class BlogArticleController {
    @Autowired
    BlogArticleService blogArticleService;

    @GetMapping("/getArticleById")
    public CommonResult<BlogArticleVO> getArticleById(@RequestParam(value = "articleId")Integer articleId ) {
        return CommonResult.success(blogArticleService.getById(articleId));
    }

    @GetMapping("/listArticleByQuery")
    public CommonResult<List<BlogArticleVO>> listArticleByQuery(BlogArticleQuery query){
        return CommonResult.success(blogArticleService.listByQuery(query));
    }

    @PostMapping("/publishArticle")
    public CommonResult<Integer> publishArticle(@RequestBody BlogArticleDTO articleDTO){
        return CommonResult.success(blogArticleService.create(articleDTO));
    }



}
