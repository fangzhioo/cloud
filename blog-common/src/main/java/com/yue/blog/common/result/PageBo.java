package com.yue.blog.common.result;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PageBo {
    private Integer current = 1;
    private Integer pageSize = 10;
    private Long total;
}
