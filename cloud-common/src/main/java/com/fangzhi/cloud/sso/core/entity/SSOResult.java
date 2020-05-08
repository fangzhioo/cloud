package com.fangzhi.cloud.sso.core.entity;

import java.io.Serializable;

public class SSOResult<T> implements Serializable {
    public static final long serialVersionUID = 42L;

    public static final int SUCCESS_CODE = 200;
    public static final String SUCCESS_MSG = "success";
    public static final int FAIL_CODE = 500;
    public static final String FAIL_MSG = "failed";

    public static final SSOResult<String> SUCCESS = new SSOResult<String>(null);
    public static final SSOResult<String> FAIL = new SSOResult<String>(FAIL_CODE, FAIL_MSG);

    public static <T> SSOResult<T> success(T data){
        return new SSOResult<T>(data);
    }

    public static <T> SSOResult<T> failed(String msg){
        return new SSOResult<T>(FAIL_CODE,msg);
    }

    private int code;
    private String msg;
    private T data;

    public SSOResult(int code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public SSOResult(T data) {
        this.code = SUCCESS_CODE;
        this.msg = SUCCESS_MSG;
        this.data = data;
    }

    public int getCode() {
        return code;
    }
    public void setCode(int code) {
        this.code = code;
    }
    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }



}
