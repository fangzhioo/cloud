package com.fangzhi.cloud.common.exception;

import com.fangzhi.cloud.common.enums.CommonErrorCodeEnum;
import lombok.Builder;
import lombok.Data;

/**
 * @author fz
 * 参数校验抛出的自定义异常
 *
 * 值得注意的是，当抛出的异常继承自Exception时，需要在全局异常处理中生效，需要一直抛出到controller层；
 * 但是如果继承自RuntimeException时，则不需要一直throws到controller
 */
@Data
@Builder
public class CustomCheckException extends RuntimeException {

    private CommonErrorCodeEnum errorCodeEnum;

    public CustomCheckException(CommonErrorCodeEnum errorCodeEnum) {
        super(errorCodeEnum.getErrorMsg());
        this.errorCodeEnum = errorCodeEnum;
    }

    @Override
    public String toString(){
        String s = super.toString();
        return s + errorCodeEnum.toString();
    }
}