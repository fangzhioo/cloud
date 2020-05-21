package com.fangzhi.cloud.blog.pojo.query;

/**
 * @author fangzhi
 */
public class CommonPageQuery {
    /**
     * 当前页
     * 【注意】数据库中offset是从0开始，这里的current是从1开始
     */
    private int current = 1;
    private int pageSize = 5;

    public int getCurrent() {
        return current;
    }

    public void setCurrent(int current) {
        this.current = Math.max(current, 1);
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = Math.max(pageSize, 1);
    }

    public int getLimit() {
        return Math.max(pageSize, 1);
    }

    public int getOffset(){
        if(this.current < 1){
            return 0;
        }else{
            return getLimit()* (current - 1);
        }
    }
}
