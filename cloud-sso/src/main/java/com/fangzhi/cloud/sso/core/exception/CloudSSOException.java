package com.fangzhi.cloud.sso.core.exception;

public class CloudSSOException extends RuntimeException {
    private static final long serialVersionUID = 42L;

    public CloudSSOException(String msg) {
        super(msg);
    }

    public CloudSSOException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public CloudSSOException(Throwable cause) {
        super(cause);
    }
}
