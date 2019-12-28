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