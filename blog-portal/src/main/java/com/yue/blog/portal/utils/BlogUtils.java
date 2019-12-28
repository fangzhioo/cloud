package com.yue.blog.portal.utils;

import cn.hutool.core.util.StrUtil;
import cn.hutool.crypto.SecureUtil;
import cn.hutool.crypto.symmetric.AES;
import com.yue.blog.common.constant.BlogConstants;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.Random;

public class BlogUtils {
    private static byte[] AES_KEYS = new byte[] { 'a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b','a', 'b'};
    private static AES aes = SecureUtil.aes(AES_KEYS);

    /***
     * SHA256加密
     * @param source
     * @return
     */
    public static String SHA256encode(String source){
        if(StrUtil.hasBlank(source)){
            return null;
        }
        return SecureUtil.sha256(source);
    }

    /**
     * 获取当前登陆用户
     * @param request
     * @return
     */
    public static Integer getCurrentUserId(HttpServletRequest request){
        if(request==null){
            return null;
        }
        HttpSession session = request.getSession();
        Integer currentUserId = (Integer) session.getAttribute(BlogConstants.SESSION_CURRENT_USER);
        return currentUserId;
    }

    /***
     * getCookieUserId
     * @param request
     * @return
     */
    public static Integer getCookieUserId(HttpServletRequest request){
        if(request != null){
            Cookie cookie = getCookie(BlogConstants.USER_IN_COOKIE,request);
            if(cookie != null && cookie.getValue() != null){
                try{
                    String uid = aes.decryptStr(cookie.getValue());
                    return StrUtil.isNotBlank(uid) ? Integer.valueOf(uid) : null;
                }catch (Exception e){
                    e.printStackTrace();
                }
            }
        }
        return null;
    }

    /**
     *
     * @param response
     * @param uid
     */
    public static void setCookie(HttpServletResponse response, Integer uid){
        try {
            String val = aes.encryptHex(uid.toString());
            Cookie cookie = new Cookie(BlogConstants.USER_IN_COOKIE,val);
            cookie.setPath("/");
            cookie.setMaxAge( 60 * 30);
            cookie.setSecure(Boolean.FALSE);
            response.addCookie(cookie);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    /***
     * getCookie
     * @param name
     * @param request
     * @return
     */
    public static Cookie getCookie(String name, HttpServletRequest request){
        Cookie[] cookies = request.getCookies();
        if(cookies == null){
            return null;
        }
        for (Cookie c : cookies){
            if(c.getName().equals(name)){
                return c;
            }
        }
        return null;
    }

    /**
     * 创建验证码
     * @return
     */
    public static String getCaptcha(){
        StringBuilder sb = new StringBuilder();
        Random random = new Random();
        for (int i = 0;i<6;i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }

    /**
     *
     * @MethodName: getContentType
     * @Description: 获取文件类型
     * @param fileType
     * @return String
     */
    public static String getContentType(String fileType){
        fileType = fileType.toLowerCase();
        String contentType = "";
        switch (fileType.trim()) {
            case "bmp": contentType = "image/bmp";
                break;
            case "gif": contentType = "image/gif";
                break;
            case "png":
            case "jpeg":
            case "jpg": contentType = "image/jpeg";
                break;
            case "html":contentType = "text/html";
                break;
            case "txt": contentType = "text/plain";
                break;
            case "vsd": contentType = "application/vnd.visio";
                break;
            case "ppt":
            case "pptx":contentType = "application/vnd.ms-powerpoint";
                break;
            case "doc":
            case "docx":contentType = "application/msword";
                break;
            case "xml":contentType = "text/xml";
                break;
            case "mp4":contentType = "video/mp4";
                break;
            default: contentType = "application/octet-stream";
                break;
        }
        return contentType;
    }
}
