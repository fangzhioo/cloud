package com.yue.blog.portal.controller;

import com.yue.blog.common.result.BaseResult;
import com.yue.blog.portal.pojo.bo.BlogCategoryBO;
import com.yue.blog.portal.service.CategoryService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(tags="类别标签管理")
@RequestMapping("/server/cate")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/getCateById")
    @ApiOperation("获取节点详情")
    public BaseResult get(@RequestParam(value = "cateId",required = true) Integer cateId){
        BlogCategoryBO blogCategoryBO = categoryService.get(cateId);
        return BaseResult.success(blogCategoryBO);
    }

    @GetMapping("/get")
    @ApiOperation("根据节点id获取子类")
    public BaseResult list(@RequestParam(value = "parentId",defaultValue = "0") Integer parentId){
        List<BlogCategoryBO> blogCategoryBOS = categoryService.list(parentId);
        return BaseResult.success(blogCategoryBOS);
    }

    @PostMapping("/create")
    @ApiOperation("添加分类节点")
    public BaseResult create(@RequestBody BlogCategoryBO categoryBo){
        int i = categoryService.create(categoryBo);
        return BaseResult.success(i);
    }


    @GetMapping("/delete")
    @ApiOperation("删除分类节点")
    public BaseResult delete(@RequestParam(value = "cateId",required = true) Integer cateId){
        int delete = categoryService.delete(cateId);
        return BaseResult.success(delete);
    }

    @PostMapping("/update")
    @ApiOperation("update cate")
    public BaseResult update(@RequestBody BlogCategoryBO categoryBo){
        int update = categoryService.update(categoryBo);
        return BaseResult.success(update);
    }
}
