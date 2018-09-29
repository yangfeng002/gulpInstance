section: javascript
id: layer
description: 弹出层
icon: fa-laptop
filter:tanchuceng tcc
---

# 弹出层

## 用法

弹出层插件为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源：
```html
<script src="../../dist/lib/jquery/jquery.js" type="text/javascript"></script>
<script src="../../dist/lib/layer/layer.min.js" type="text/javascript"></script>
<link href="../../dist/lib/layer/theme/default/layer.css" type="text/css" rel="stylesheet" />
```

## 示例
注意：以下仅列举了几个用法，更多详情可访问官方网站参考使用。

### 弹出框
<div class="example clearfix">
  <button id="test" class="btn btn-info">弹出框</button>
</div>

```html
代码如下：
<div class="example clearfix">
  <button id="test" class="btn btn-info">弹出框</button>
</div>
```


### 提示层
<div class="example clearfix">
  <button id="test1" class="btn btn-info">弹出提示层</button>
</div>

```html
代码如下：
<div class="example clearfix">
  <button id="test1" class="btn btn-info">弹出提示层</button>
</div>
```

### 页面层
<div class="example clearfix">
  <button id="test2" class="btn btn-info">弹出页面层</button>
</div>

```html
代码如下：
<div class="example clearfix">
  <button id="test2" class="btn btn-info">弹出页面层</button>
</div>
```
### frame层
<div class="example clearfix">
  <button id="parentIframe" class="btn btn-info">弹出frame</button>
</div>

```html
代码如下：
iframe内容可以是一个页面，也可以是一个拼装的html
<div class="example clearfix">
  <button id="parentIframe" class="btn btn-info">弹出frame</button>
</div>
```
### loading
<div class="example clearfix">
  <button id="test4" class="btn btn-info">弹出一个loading</button>
</div>

```html
代码如下：
<div class="example clearfix">
  <button id="test4" class="btn btn-info">弹出一个loading</button>
</div>
```

### loading
<div class="example clearfix">
  <button id="test5" class="btn btn-info">弹出一个tips</button>
</div>

```html
代码如下：
<div class="example clearfix">
  <button id="test5" class="btn btn-info">弹出一个弹出tips</button>
</div>
```


```js

```

<script src="dist/lib/layer/layer.min.js"></script>
<link  rel="stylesheet" href="dist/lib/layer/theme/default/layer.css"/>
<script>
   $(function(){
       //弹出一个对话框
       $('#test').on('click', function(){
           layer.alert('见到你真的很高兴', {icon: 6});
       });

      //弹出一个提示层
        $('#test1').on('click', function(){
           layer.msg('hello');
        });
       //弹出一个页面层
      $('#test2').on('click', function(){
           layer.open({
             type: 1,
             area: ['600px', '360px'],
             shadeClose: true, //点击遮罩关闭
             content: '\<\div style="padding:20px;">自定义内容\<\/div>'
           });
      });
      //弹出一个iframe层
        $('#parentIframe').on('click', function(){
          layer.open({
            type: 2,
            title: 'iframe父子操作',
            maxmin: true,
            shadeClose: true, //点击遮罩关闭层
            area : ['800px' , '520px'],
            content: '传入任意的文本或html'
          });
        });

          //弹出一个loading层
          $('#test4').on('click', function(){
            var ii = layer.load();
            //此处用setTimeout演示ajax的回调
            setTimeout(function(){
              layer.close(ii);
            }, 1000);
          });
            //弹出一个tips层
            $('#test5').on('click', function(){
              layer.tips('Hello tips!', '#test5');
            });
   })
</script>
