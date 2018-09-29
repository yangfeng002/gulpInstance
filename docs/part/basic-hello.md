section: basic
id: hello
description: 文档基本结构
icon: fa-smile-o
filter: helloworld helloworld
---

# 实例演示--HelloWorld

使用MGUI进行构建现代应用非常简单。一般情况下，MGUI仅依赖于jQuery，MGUI中的Javascript组件构建于jQuery之上。

下面展示一个非常简单的Hello world页面。

```html
<!DOCTYPE html>
<html lang="zh-cn">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Hello world!</title>
    <!-- mgui -->
    <link href="css/mgui.min.css" rel="stylesheet">
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- 在此处编码你的代码 -->

    <!-- jQuery (MGUI中的Javascript组件依赖于jQuery) -->
    <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
    <!-- MGUI Javascript组件 -->
    <script src="js/mgui.min.js"></script>
  </body>
</html>
```

如果你的网站需要兼容IE8，请参考“[兼容IE浏览器](#basic/ie)”章节。
