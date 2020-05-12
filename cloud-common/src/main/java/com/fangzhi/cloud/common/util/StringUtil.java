package com.fangzhi.cloud.common.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class StringUtil {
    public static final String DATETOSTRING_DEFAULT_FORMAT = "yyyy-MM-dd HH:mm:ss";

    /**
     * date to string
     * @param date
     * @return
     */
    public static String formatDate(Date date){
        if(date == null){
            return "";
        }
        return new SimpleDateFormat(DATETOSTRING_DEFAULT_FORMAT).format(date);
    }

    public static String formatDate(Date date,String format){
        if(date == null){
            return "";
        }
        return new SimpleDateFormat(format).format(date);
    }

}
