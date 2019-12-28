package com.yue.blog.common.exception;

import com.yue.blog.common.enums.ErrorCodeEnum;

public class CustomException extends Exception {
    private ErrorCodeEnum errorCodeEnum;

    public CustomException(ErrorCodeEnum errorCodeEnum){
        super(errorCodeEnum.getErrorMsg());
        this.errorCodeEnum = errorCodeEnum;
    }

    public CustomException(String message, ErrorCodeEnum errorCodeEnum){
        super(message);
        this.errorCodeEnum = errorCodeEnum;
    }

    public CustomException(String message, Throwable cause, ErrorCodeEnum errorCodeEnum){
        super(message,cause);
        this.errorCodeEnum = errorCodeEnum;
    }

    public CustomException(Throwable cause, ErrorCodeEnum errorCodeEnum){
        super(cause);
        this.errorCodeEnum = errorCodeEnum;
    }

    public CustomException(String message, Throwable cause, Boolean enableSuppression, Boolean writableStackTrace, ErrorCodeEnum errorCodeEnum){
        super(message,cause,enableSuppression,writableStackTrace);
        this.errorCodeEnum = errorCodeEnum;
    }

    public ErrorCodeEnum getErrorCodeEnum(){return errorCodeEnum;}

    public void setErrorCodeEnum(ErrorCodeEnum errorCodeEnum){this.errorCodeEnum = errorCodeEnum;}
}
