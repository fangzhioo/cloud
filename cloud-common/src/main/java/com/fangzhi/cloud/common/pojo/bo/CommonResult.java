package com.fangzhi.cloud.common.pojo.bo;

import com.fangzhi.cloud.common.enums.CommonErrorCodeEnum;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommonResult<T> {
    public static final Integer SUCCESS_DEFAULT_CODE = 10000;
    public static final String SUCCESS_DEFAULT_MSG = "success";
    public static final Integer FAILED_DEFAULT_CODE = 99999;
    public static final String FAILED_DEFAULT_MSG = "failed";


    private Integer code;
    private String msg;
    private T data;

    public static <T> CommonResult<T> success(T data){
        return new CommonResult<T>(SUCCESS_DEFAULT_CODE,SUCCESS_DEFAULT_MSG,data);
    }

    public static <T> CommonResult<T> failed(){
        return new CommonResult<>(FAILED_DEFAULT_CODE,FAILED_DEFAULT_MSG,null);
    }

    public static <T> CommonResult<T> failed(String msg){
        return new CommonResult<>(FAILED_DEFAULT_CODE,msg,null);
    }

    public static <T> CommonResult<T> failed(CommonErrorCodeEnum errorCodeEnum){
        return new CommonResult<>(errorCodeEnum.getErrorCode(),errorCodeEnum.getErrorMsg(),null);
    }

}
