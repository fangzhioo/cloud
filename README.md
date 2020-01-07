# blog系统

## 模块结构

```$xslt

├── config                   # taro配置
├── dist                     # 编译目标文件夹
├── src
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── models               # 全局 dva model
│   ├── pages                # 业务页面入口
│   │   ├── center              # 个人中心
│   │   ├── info                # 列表 器材类
│   │   ├── info_detail         # 详情 器材类
│   │   ├── notice              # 列表 展览会
│   │   ├── notice_detail       # 详情 展览会
│   │   ├── publish             # 发布
│   │   └── cate                # 分类，（暂时未用到）
│   ├── services             # 后台接口服务
│   └── utils                # 工具库
├── global.d.ts              # ts全局声明文件
├── README.md
└── package.json

```

## 关于发布

### ssh连接远程服务器
```shell script
ssh root@49.234.214.14 -p 22
```
fz123456-

### 用ssh连接的方式上传jar包
```shell script
scp E:\00-Code\05-Blob\yue\blog-portal\target root@49.234.214.14:/blog
```

### 部署
```shell script
# nohup 后台启动进程
nohup java -jar xxx.jar &
# 关闭进程

```

### nginx
```shell script
# 依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
# 下载安装包
wget http://nginx.org/download/nginx-1.17.0.tar.gz
# 解压
tar -xvf nginx-1.17.0.tar.g
# 进入目录
cd nginx-1.17.0
# 安装
./configure
# make
make
# make install
make install
# 配置nginx.conf 反向代理端口
vi /usr/local/nginx/conf/nginx.conf
# 启动
/usr/local/nginx/sbin/nginx -s reload
# 查看进程
ps -ef | grep nginx
```

## 关于docker

暂时没有测试
