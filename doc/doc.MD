# 前置环境

参考 [Spring cloud Alibaba环境](http://www.javadaily.cn/articles/2019/11/29/1575026789380.html)


### mysql配置

启动临时容器

```shell script
docker run -p3306:3306 --rm --name mysql -e MYSQL_ROOT_PASSWORD=123456 -v /app/cloud/mysql/data:/var/lib/mysql mysql:5.7
```

此处需要挂载宿主机目录，在启动docker-compose后就不需要再次初识化数据。

用mysql客户端连接你的容器，然后导入nacos的数据表

`https://github.com/alibaba/nacos/tree/develop/distribution/conf/nacos-mysql.sql`

停止容器,由于加了--rm参数，所以容器会自动删除

```shell script
docker stop 3475ef078d3a
```

### nacos、sentinel、mysql 

直接docker容器化，`docker-compose.yaml`的内容如下：

```yaml
version: "3"
services:
  mysql:
    container_name: mysql
    image: mysql:5.7
    environment:
      - MYSQL_ROOT_PASSWORD=123456
    volumes:
      - /app/cloud/mysql/data:/var/lib/mysql
    ports:
      - "3306:3306"
    restart: always

  nacos:
    image: nacos/nacos-server:1.1.4
    container_name: nacos
    environment:
      - PREFER_HOST_MODE=hostname
      - MODE=standalone
      - MYSQL_DATABASE_NUM=1
      - SPRING_DATASOURCE_PLATFORM=mysql
      - MYSQL_MASTER_SERVICE_HOST=mysql
      - MYSQL_MASTER_SERVICE_DB_NAME=nacos_config
      - MYSQL_MASTER_SERVICE_PORT=3306
      - MYSQL_MASTER_SERVICE_USER=root
      - MYSQL_MASTER_SERVICE_PASSWORD=123456
    volumes:
      - /app/cloud/nacos/logs:/home/nacos/logs
    ports:
      - "8848:8848"
    depends_on:
      - mysql
    restart: always


  sentinel:
    image: bladex/sentinel-dashboard:latest
    container_name: sentinel
    ports:
      - "8858:8858"
    restart: always
```

上传至服务器，运行命令 
```shell script
docker-compose up -d 
```
  -d 后台运行
  
访问 xxx.xxx.xx.xxx:8848/nacos/ ,验证是否安装成功；


# 服务注册发现

参考[官方文档](https://github.com/alibaba/spring-cloud-alibaba/blob/master/spring-cloud-alibaba-examples/nacos-example/nacos-discovery-example/readme-zh.md)

父工程中，引入maven依赖，如下

```xml
<dependencyManagement>
        <dependencies>
            <!-- spring-boot-->
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>2.2.6.RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
            <!--spring-cloud-alibaba -->
            <dependency>
                <groupId>com.alibaba.cloud</groupId>
                <artifactId>spring-cloud-alibaba-dependencies</artifactId>
                <version>2.2.0.RELEASE</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>
        </dependencies>
    </dependencyManagement>
```

注意是在 `dependencyManagement`中。

自模块需要注册服务到nacos，pom.xml如下：

```xml
<dependencies>
        <!--必须的依赖        -->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>

        <!--其他       -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
```

在 `application.properties`中添加nacos服务地址和应用名称。

```yaml
spring:
  application:
    name: cloud-sso
  cloud:
    nacos:
      discovery:
        server-addr: 49.234.214.14:8848/
```

在启动类中，添加注解 `@EnableDiscoveryClient` 开启服务注册发现。

```java
@SpringBootApplication
@EnableDiscoveryClient
public class SsoApplication {
    public static void main(String[] args) {
        SpringApplication.run(SsoApplication.class, args);
    }
}
```

就能在nacos的管理页面中看到服务列表了。

### 调用服务

准备两个子模块，A和B， 分别将两者按照上面的方式，注册到nacos中。

现在A作为服务者，B作为消费者。 

在B中添加配置，用户获取 RestTemplate。nacos默认集成了 `Ribbon`, 也自动做了负载均衡。

```java
@Configuration
public class ApplicationContextConf {
    @Bean
    @LoadBalanced
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }

}
```
A中有一个服务，

```java
@Controller
public class MainController {
    @GetMapping("/user/{id}")
    @ResponseBody
    public SSOUser getUserById(@PathVariable("id") String id){
        SSOUser ssoUser = new SSOUser();
        ssoUser.setUserId(id);
        ssoUser.setUserName("fangzhi");
        return ssoUser;
    }
}

```

在B的controller中，调用A服务方法如下

```java
@RestController
public class MainController {
    @Resource
    private RestTemplate restTemplate;
    @Value("${service-url.nacos-cloud-sso-service}")
    private String nacosCloudSSOUrl;

    @GetMapping("/getAuthor")
    public String getAuthor(@RequestParam("id") String id){
        // 调用sso中的服务
        return restTemplate.getForObject(nacosCloudSSOUrl+"/user/"+ id,String.class);
    }
}
```

