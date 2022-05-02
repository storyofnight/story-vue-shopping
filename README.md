# vue-shopping storyofnight


## 前言

该项目为前端展示部分，后端数据地址：[传送门](https://github.com/storyofnight/vue-shopping-serve)。

## 项目介绍

`story-vueshopping-web`是一个电商后台管理系统的前端项目，基于Vue+Element实现。主要包括商品管理、订单管理、会员管理、促销管理、运营管理、内容管理、统计报表、财务管理、权限管理、设置等功能。

### 项目演示

项目目录下包含打包文件dist 通过终端指令“node app.js”即可访问 地址为http://127.0.0.1:80



### 技术选型

技术 | 说明 | 官网
----|----|----
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)
Element | 前端UI框架 | [https://element.eleme.io/](https://element.eleme.io/)
Axios | 前端HTTP框架 | [https://github.com/axios/axios](https://github.com/axios/axios)
v-charts | 基于Echarts的图表框架 | [https://v-charts.js.org/](https://v-charts.js.org/)
Js-cookie | cookie管理工具 | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)
nprogress | 进度条控件 | [https://github.com/rstacruz/nprogress](https://github.com/rstacruz/nprogress)
vue-element-admin | 项目脚手架参考 | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

### 项目布局

``` 布局
src -- 源码目录
├── assets -- 静态图片资源文件/全局css样式
├── router -- vue-router路由配置
├── store -- vuex的状态管理
├── common -- 工具类
├── main-dev/main-prod -- 第三方组件引入
├── common -- 工具类
└── src -- 前端页面
    ├── Home -- 首页
    ├── welcome -- 欢迎界面
    ├── login -- 登录页
    ├── goods -- 商品模块
    ├── order -- 商品订单
    └── power -- 用户权利
	└── users -- 用户列表
	└── report -- 数据表格
```

## 搭建步骤
- 下载node并安装
- 该项目为前后端分离项目，访问本地访问接口需搭建后台环境，搭建请参考后端项目[传送门](https://github.com/storyofnight/vue-shopping-serve);
- 克隆源代码到本地，使用IDEA打开，并完成编译;
- 在IDEA命令行中运行命令：npm install,下载相关依赖;
- 在IDEA命令行中运行命令：yarn serve,运行项目;
- 也可通过vue ui载入本项目
- `注意`：如果遇到无法运行npm命令，需要配置npm的环境变量，如在path变量中添加：C:\Users\zhenghong\AppData\Roaming\npm;
- `注意`：如果遇到npm install无法成功下载依赖，请参考[使用Jenkins一键打包部署前端应用，就是这么6！](http://www.macrozheng.com/#/reference/jenkins_vue) 中`遇到的坑`部分。


