package com.fangzhi.cloud.blog.controller.web;

import com.fangzhi.cloud.blog.pojo.dto.BlogArticleDTO;
import com.fangzhi.cloud.blog.pojo.query.BlogArticleQuery;
import com.fangzhi.cloud.blog.pojo.vo.BlogArticleVO;
import com.fangzhi.cloud.blog.service.BlogArticleService;
import com.fangzhi.cloud.common.pojo.bo.CommonResult;
import io.swagger.annotations.ApiOperation;
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
    @ApiOperation("获取文章详情")
    public CommonResult<BlogArticleVO> getArticleById(@RequestParam(value = "articleId")Integer articleId ) {
        return CommonResult.success(blogArticleService.getById(articleId));
    }

    @GetMapping("/listArticleByQuery")
    @ApiOperation("获取文章列表")
    public CommonResult<List<BlogArticleVO>> listArticleByQuery(BlogArticleQuery query){
        return CommonResult.success(blogArticleService.listByQuery(query));
    }

    /**
     * 获取文章总数
     * @param query
     * @return
     */
    @GetMapping("countArticleByQuery")
    public CommonResult<Long> countArticleByQuery(BlogArticleQuery query){
        return CommonResult.success(blogArticleService.countByQuery(query));
    }

    /**
     * 发布文章
     * @param articleDTO
     * @return
     */
    @PostMapping("/publishArticle")
    public CommonResult<Integer> publishArticle(@RequestBody BlogArticleDTO articleDTO){
        return CommonResult.success(blogArticleService.create(articleDTO));
    }



}
