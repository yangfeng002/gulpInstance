section: basic
id: download
description: 下载、CDN、获取源码
icon: fa-download
filter: xiazaiyushiyong xzysy
---

# 下载与使用

MGUI（当前版本 v{$version}） 提供了多种方式让你快速上手。你可以根据自己的需要选择合适的使用方式。

## 下载

<div class="row">
  <div class="col-sm-6">
    <h2>MGUI 生产包</h2>
    <p>包含编译及压缩后用于生产环境的 CSS、JavaScript 和字体文件（这些文件在源码包的 `dist` 目录下提供）。不包括文档和源码。</p>
    <a href="docs/download/mgui-{$version}-dist.zip" class="btn btn-lg btn-primary" target="_blank">下载 MGUI</a> &nbsp; 
    <a href="https://github.com/yangfeng002/module-MGUI/releases/download/v1.0/mgui-1.0-dist.zip" class="" target="_blank">从 Github 下载</a>
  </div>
  <div class="col-sm-6">
    <h2>MGUI 源码</h2>
      <p>MGUI 的完整项目代码，包括 Less、JavaScript 和字体等源码文件，你还可以使用内置 gulp 任务来定制自己的版本，另外还有完整的文档。</p>
      <a href="https://github.com/yangfeng002/module-MGUI/archive/master.zip" class="btn btn-lg" target="_blank">下载源码</a> &nbsp;
    </div>
  </div>
</div>


## 使用

```html
<!-- MGUI 标准版压缩后的 CSS 文件 -->
<link rel="stylesheet" href="../../module-MGUI/dist/css/mgui.min.css"/>
<!-- MGUI Javascript 依赖 jQuery -->
<script src="../../module-MGUI/dist/lib/jquery/jquery.js"></script>
<!-- MGUI 标准版压缩后的 JavaScript 文件 -->
<script src="../../module-MGUI/dist/js/mgui.min.js"></script>
```

