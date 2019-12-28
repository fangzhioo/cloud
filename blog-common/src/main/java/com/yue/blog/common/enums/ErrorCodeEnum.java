package com.yue.blog.common.enums;

public enum ErrorCodeEnum {

    ERROR_10000(10000,"success"),

    /**
     * 授权相关
     */
    ERROR_10001(10001,"不存在用户"),
    ERROR_10002(10002,"密码错误"),
    ERROR_10003(10003,"用户名为空"),
    ERROR_10004(10004,"用户名已存在"),
    ERROR_10005(10005,"验证码错误"),
    ERROR_10006(10006,"您未登录，请先登录"),
    ERROR_10007(10007,"验证码已过期"),

    /**
     * 文章相关
     */
    ERROR_20000(20000,"文章标题不为空"),
    ERROR_20001(20001,"文章内容不为空"),
    ERROR_20002(20002,"文章发布失败"),
    ERROR_20003(20003,"不是文章作者，无权限编辑"),
    ERROR_20004(20004,"文章不存在"),
    ERROR_20005(20005,""),

    /**
     * 系统相关
     */
    ERROR_90000(90000,"未登录或已过期"),
    ERROR_90001(90001,"无权限"),
    ERROR_99998(99998,"缺少必要参数"),

    ERROR_99999(99999,"默认错误");

    private int errorCode;
    private String errorMsg;

    ErrorCodeEnum(int errorCode, String errorMsg) {
        this.errorCode = errorCode;
        this.errorMsg = errorMsg;
    }

    public int getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(int errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }

    @Override
    public String toString() {
        return "ErrorCodeEnum{" +
                "errorCode=" + errorCode +
                ", errorMsg='" + errorMsg + '\'' +
                '}';
    }
}
