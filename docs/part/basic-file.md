section: basic
id: file
description: 预编译文件和源码结构
icon: fa-sitemap
filter: wenjianmulujiegou wjmljg
---

# 文件目录

## 预编译的内容

下载预编译压缩包解压后将会得到以下目录结构：

```
mgui/
├── css/
│   ├── mgui.css
│   ├── mgui.min.css
│   ├── mgui.lite.css
│   ├── mgui.lite.min.css
│   ├── mgui-theme.css
│   └── mgui-theme.min.css
├── js/
│   ├── mgui.js
│   ├── mgui.min.js
│   ├── mgui.lite.js
│   └── mgui.lite.min.js
├── fonts/
│   ├── zenicon.eot
│   ├── zenicon.svg
│   ├── zenicon.ttf
│   └── zenicon.woff
└── lib
```

css目录下提供了三种编译类型：‘mgui’、‘mgui.lite’、‘mgui-theme’，其中‘mgui.lite’为精简版样式（关于精简版请参考本文档后续章节），‘mgui-theme’为mgui的主题样式。每种编译类型均提供了压缩版本，对应的文件名为‘*.min.css’。js目录下提供对应的js文件。字体图标放在‘fonts’文件夹下。lib目录下存放一些可以独立使用的组件。

## 源码目录结构

可以随时从Github上下载MGUI的源码。不仅仅包含所有开发源码文件，而且包含完整的文档和示例。如果你需要定制的编译版本更应该下载源码。以下简要说明源码目录结构。

```
mgui/
├── src/                         MGUI的源码目录
│   ├── less/
│   ├── js/
│   ├── fonts/
│   └── apps/                    一些自定义的编译配置
├── dist/                        预编译输出目录
│   ├── css/
│   ├── js/
│   └── fonts/
├── docs/                        文档
│   └── example/                 文档中用到的例子
├── assets/                      一些依赖的或者配合使用的其他资源，包含jquery等
├── Gruntfile.js                 Grunt构建脚本
└── index.html                   文档首页
```
