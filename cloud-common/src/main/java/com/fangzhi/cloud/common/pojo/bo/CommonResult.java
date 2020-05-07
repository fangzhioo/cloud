package com.fangzhi.cloud.common.pojo.bo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommonResult<T> {
    public static final Integer SUCCESS_DEFAULT_CODE = 200;
    public static final String SUCCESS_DEFAULT_MSG = "success";

    private Integer code;
    private String msg;
    private T data;

    public static <T> CommonResult<T> success(T data){
        return new CommonResult<T>(SUCCESS_DEFAULT_CODE,SUCCESS_DEFAULT_MSG,data);
    }
}
