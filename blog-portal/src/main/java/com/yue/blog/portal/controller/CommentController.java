package com.yue.blog.portal.controller;

import com.yue.blog.common.result.BasePages;
import com.yue.blog.common.result.BaseResult;
import com.yue.blog.portal.pojo.bo.BlogCommentBO;
import com.yue.blog.portal.pojo.dto.BlogCommentSearch;
import com.yue.blog.portal.service.CommentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags="评论前端接口")
@RestController
@RequestMapping("/server/comment")
public class CommentController {
    @Autowired
    private CommentService commentService;

    @GetMapping("/list")
    @ApiOperation("list by article")
    public BasePages list(BlogCommentSearch search){
        List<BlogCommentBO> list = commentService.list(search);
        return BasePages.restPage(list);
    }

    @PostMapping("/publish")
    @ApiOperation("publish comment")
    public BaseResult publish(@RequestBody BlogCommentBO commentBo){
        int publish = commentService.publish(commentBo);
        return BaseResult.success(publish);
    }

    @GetMapping("/delete")
    @ApiOperation("delete")
    public BaseResult delete(@RequestParam(value = "id",required = true) Integer id){
        int delete = commentService.delete(id);
        return BaseResult.success(delete);
    }
}
