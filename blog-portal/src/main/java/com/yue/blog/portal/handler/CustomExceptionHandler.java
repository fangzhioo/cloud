package com.yue.blog.portal.handler;

import com.yue.blog.common.exception.CustomException;
import com.yue.blog.common.result.BaseResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
@Component
@Slf4j
public class CustomExceptionHandler {
    // 可以添加错误信息日志插入
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public BaseResult handleException(Exception e){
        // log
        log.error("============ERROR==============Exception===========>");
        log.error(e.toString());
        return BaseResult.error(e.getMessage());
    }

    @ExceptionHandler(CustomException.class)
    @ResponseBody
    public BaseResult handleCustomException(CustomException e){
        // TODO 如何将guava中的校验失败异常抛出为这里的自定义异常，来统一处理？
        log.error("============ERROR==============CustomException===========>");
        log.error(e.toString());
        return BaseResult.error(e.getErrorCodeEnum());
    }
}
