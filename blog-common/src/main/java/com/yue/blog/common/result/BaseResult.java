package com.yue.blog.common.result;

import com.yue.blog.common.enums.ErrorCodeEnum;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class BaseResult<T> {
    private Integer code;
    private String message;
    private T data;

    public static <T> BaseResult success(T data){
        return new BaseResult(ErrorCodeEnum.ERROR_10000.getErrorCode(),"success",data);
    }

    public static BaseResult fail(){
        return new BaseResult(ErrorCodeEnum.ERROR_99999.getErrorCode(),ErrorCodeEnum.ERROR_99999.getErrorMsg(),false);
    }

    public static BaseResult fail(String message){
        return new BaseResult(ErrorCodeEnum.ERROR_99999.getErrorCode(),message,false);
    }

    public static BaseResult error(){
        return new BaseResult(ErrorCodeEnum.ERROR_99999.getErrorCode(),ErrorCodeEnum.ERROR_99999.getErrorMsg(),false);
    }

    public static BaseResult error(String message){
        return new BaseResult(ErrorCodeEnum.ERROR_99999.getErrorCode(),message,false);
    }

    public static BaseResult error(ErrorCodeEnum errorCodeEnum){
        return new BaseResult(errorCodeEnum.getErrorCode(),errorCodeEnum.getErrorMsg(),false);
    }

    public static BaseResult error(ErrorCodeEnum errorCodeEnum, Exception e){
        return new BaseResult(errorCodeEnum.getErrorCode(),e.getMessage(),errorCodeEnum);
    }

    public static BaseResult unauthorized(String message){
        return new BaseResult(ErrorCodeEnum.ERROR_90000.getErrorCode(),message,false);
    }

    public static BaseResult forbidden(String message){
        return new BaseResult(ErrorCodeEnum.ERROR_90001.getErrorCode(),message,false);
    }

}
