package com.yue.blog.common.result;

import com.github.pagehelper.PageInfo;
import com.yue.blog.common.enums.ErrorCodeEnum;
import lombok.Data;

import java.util.List;

@Data
public class BasePages<T> extends BaseResult {
    private PageBo page;

    /**
     * list转换为分页信息
     * @param list
     * @param <T>
     * @return
     */
    public static <T> BasePages<T> restPage(List<T> list){
        BasePages<T> result = new BasePages<T>();
        PageInfo<T> pageInfo = new PageInfo<T>(list);
        PageBo pageBo = new PageBo(pageInfo.getPageNum(), pageInfo.getPageSize(), pageInfo.getTotal());
        result.setPage(pageBo);
        result.setData(pageInfo.getList());
        result.setCode(ErrorCodeEnum.ERROR_10000.getErrorCode());
        result.setMessage(ErrorCodeEnum.ERROR_10000.getErrorMsg());
        return result;
    }

}
