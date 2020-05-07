package com.fangzhi.cloud.sso.conf;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
@MapperScan("com.fangzhi.cloud.sso.dao.mapper")
public class MybatisConf {
}
