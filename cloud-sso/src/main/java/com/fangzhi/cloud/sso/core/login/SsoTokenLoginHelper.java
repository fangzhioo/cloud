package com.fangzhi.cloud.sso.core.login;

import com.fangzhi.cloud.sso.core.constant.SSOConstant;
import com.fangzhi.cloud.sso.core.entity.SSOUser;
import com.fangzhi.cloud.sso.core.store.SsoLoginStore;
import com.fangzhi.cloud.sso.core.store.SsoSessionIdHelper;

import javax.servlet.http.HttpServletRequest;

public class SsoTokenLoginHelper {
    /**
     * client login
     *
     * @param sessionId
     * @param xxlUser
     */
    public static void login(String sessionId, SSOUser xxlUser) {

        String storeKey = SsoSessionIdHelper.parseStoreKey(sessionId);
        if (storeKey == null) {
            throw new RuntimeException("parseStoreKey Fail, sessionId:" + sessionId);
        }

        SsoLoginStore.put(storeKey, xxlUser);
    }

    /**
     * client logout
     *
     * @param sessionId
     */
    public static void logout(String sessionId) {

        String storeKey = SsoSessionIdHelper.parseStoreKey(sessionId);
        if (storeKey == null) {
            return;
        }

        SsoLoginStore.remove(storeKey);
    }
    /**
     * client logout
     *
     * @param request
     */
    public static void logout(HttpServletRequest request) {
        String headerSessionId = request.getHeader(SSOConstant.SSO_SESSIONID);
        logout(headerSessionId);
    }


    /**
     * login check
     *
     * @param sessionId
     * @return
     */
    public static SSOUser loginCheck(String  sessionId){

        String storeKey = SsoSessionIdHelper.parseStoreKey(sessionId);
        if (storeKey == null) {
            return null;
        }

        SSOUser xxlUser = SsoLoginStore.get(storeKey);
        if (xxlUser != null) {
            String version = SsoSessionIdHelper.parseVersion(sessionId);
            if (xxlUser.getVersion().equals(version)) {

                // After the expiration time has passed half, Auto refresh
                if ((System.currentTimeMillis() - xxlUser.getExpireFreshTime()) > xxlUser.getExpireMinite()/2) {
                    xxlUser.setExpireFreshTime(System.currentTimeMillis());
                    SsoLoginStore.put(storeKey, xxlUser);
                }

                return xxlUser;
            }
        }
        return null;
    }


    /**
     * login check
     *
     * @param request
     * @return
     */
    public static SSOUser loginCheck(HttpServletRequest request){
        String headerSessionId = request.getHeader(SSOConstant.SSO_SESSIONID);
        return loginCheck(headerSessionId);
    }

}
