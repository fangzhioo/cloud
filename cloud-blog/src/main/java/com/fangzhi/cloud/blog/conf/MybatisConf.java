package com.fangzhi.cloud.blog.conf;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@MapperScan("com.fangzhi.cloud.blog.dao.mapper")
public class MybatisConf {
}
