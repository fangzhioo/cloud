package com.fangzhi.cloud.sso.core.store;

import com.fangzhi.cloud.sso.core.entity.SSOUser;

public class SsoSessionIdHelper {

    public static final String SSO_SESSION_ID_SEPARATOR = "_";
    /**
     * make client sessionId
     *
     * @param xxlSsoUser
     * @return
     */
    public static String makeSessionId(SSOUser xxlSsoUser){
        String sessionId = xxlSsoUser.getUserId().concat(SSO_SESSION_ID_SEPARATOR).concat(xxlSsoUser.getVersion());
        return sessionId;
    }

    /**
     * parse storeKey from sessionId
     *
     * @param sessionId
     * @return
     */
    public static String parseStoreKey(String sessionId) {
        if (sessionId!=null && sessionId.contains(SSO_SESSION_ID_SEPARATOR)) {
            String[] sessionIdArr = sessionId.split(SSO_SESSION_ID_SEPARATOR);
            if (sessionIdArr.length==2
                    && sessionIdArr[0]!=null
                    && sessionIdArr[0].trim().length()>0) {
                return sessionIdArr[0].trim();
            }
        }
        return null;
    }

    /**
     * parse version from sessionId
     *
     * @param sessionId
     * @return
     */
    public static String parseVersion(String sessionId) {
        if (sessionId!=null && sessionId.contains(SSO_SESSION_ID_SEPARATOR)) {
            String[] sessionIdArr = sessionId.split(SSO_SESSION_ID_SEPARATOR);
            if (sessionIdArr.length==2
                    && sessionIdArr[1]!=null
                    && sessionIdArr[1].trim().length()>0) {
                return sessionIdArr[1].trim();
            }
        }
        return null;
    }

}
