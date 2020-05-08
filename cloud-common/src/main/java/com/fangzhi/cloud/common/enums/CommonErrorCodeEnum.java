package com.fangzhi.cloud.common.enums;

public enum CommonErrorCodeEnum {

    ERROR_CODE_10000(10000,"成功"),
    ERROR_CODE_99999(99999,"系统默认错误！");

    private Integer errorCode;
    private String errorMsg;

    CommonErrorCodeEnum(Integer code, String msg){
        this.errorCode = code;
        this.errorMsg = msg;
    }

    public Integer getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMsg() {
        return errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }


}
