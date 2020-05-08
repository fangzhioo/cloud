package com.fangzhi.cloud.common.base;


import com.fangzhi.cloud.common.enums.CommonErrorCodeEnum;
import com.fangzhi.cloud.common.exception.CustomCheckException;

/**
 * 校验参数， 统一抛出自定义错误
 * 参考自  com.google.common.base.Preconditions
 *
 */
public final class Preconditions {
    private Preconditions(){};

    /**
     * 检查表达式状态
     * @param b
     * @throws CustomCheckException
     */
    public static void checkState(boolean b) throws CustomCheckException {
        if(!b){
            throw new CustomCheckException(CommonErrorCodeEnum.ERROR_CODE_99999);
        }
    };

    /**
     * 检查表达式状态
     * @param b 返回Boolean的表达式
     * @param errorCodeEnum 错误信息
     * @throws CustomCheckException 自定义异常
     */
    public static void checkState(boolean b, CommonErrorCodeEnum errorCodeEnum) throws CustomCheckException {
        if(!b){
            throw new CustomCheckException(errorCodeEnum);
        }
    };

    public static <T> T checkNotNull(T obj) throws CustomCheckException{
        if (obj == null){
            throw new CustomCheckException(CommonErrorCodeEnum.ERROR_CODE_99999);
        }else {
            return obj;
        }
    }

    /**
     * 检查是否为null
     * @param obj
     * @param errorCodeEnum
     * @param <T>
     * @return
     * @throws CustomCheckException
     */
    public static <T> T checkNotNull(T obj,CommonErrorCodeEnum errorCodeEnum) throws CustomCheckException{
        if (obj == null){
            throw new CustomCheckException(errorCodeEnum);
        }else {
            return obj;
        }
    }


}
