section: control
id: icon
description: 使用和查找图标
icon: fa-fonticons
filter: tubiao tb
---

# 图标

<style>
#iconsExample ul {padding: 0;}
#iconsExample li {
  cursor: pointer;
  float: left;
  width: 200px;
  padding:25px;
  line-height: 25px;
  list-style: none;
  padding: 2px 10px;
  white-space: nowrap;
  transition: all .3s;
}
#iconsExample li a {
        display: block;
        color: #222;
        line-height: 32px;
        height: 32px;
        padding-left: 10px;
        border-radius: 4px;
 }
#iconsExample li a:hover {
     background-color: #1d9d74;
     color: #fff;
     text-decoration: none;
}
#iconsExample li a .fa{
    width: 32px;
    font-size: 14px;
    display: inline-block;
    text-align: right;
    margin-right: 10px;
}
#iconsExample li a:hover .fa {
    font-size: 24px;
    vertical-align: -4px;
}
#iconsExample li a > i {display: inline-block; min-width: 20px}
.table-icons-example td {vertical-align: middle;}
.table-icons-example td pre {margin-bottom: 0;}

</style>

图标能在视觉上简洁有效的指引用户操作。特殊情况下，使用图标能够代替文本。

## 何时使用图标？

同一个应用程序中的图标应该具有一致的外观及用户行为响应，应该将整个图标集作为用户界面中的重要部分。一般图标用于如下情况：

*   用于应用程序头部，便于用户识别正在使用的应用；
*   用于按钮，对于一些常用的按钮可以使用图标取代按钮中的文本，使得界面更加简洁；
*   用于提示消息，图标能指明消息类型，便于用户无需仔细阅读消息内容就可以迅速做出决策；
*   用于一些简单但重要列表，在列表项目前面加上合适的图标能大大增强列表识别程度；
*   等同与标签，图标能简明表达项目或信息类型。

## 使用图标字体

在图标字体没有普及之前，图标通常是通过图片来展示，如今图标字体是展示图标的更好方式。使用图标字体能使用CSS对图标进行调整，例如定义大小、颜色及特殊效果。在MGUI中将使用图标字体作为系统图标集方案。采用开源web图标字体[Font Awesome](http://fortawesome.github.io/Font-Awesome/)是一个不错的选择。

MGUI基于FontAwesome 4.7.0定制，去除了一些不常用的图标，并加入了一些适合中国使用的图标。

## MGUI中的图标

在MGUI中提供了<span class="icons-count">?</span>个图标：

<div class="example" id="iconsExample">
  <div class="text-center text-muted"><i class="fa fa-spin fa-spinner"></i> 请稍后...</div>
</div>

## 如何使用图标？

### 用法

使用一个单独的`<span>`标签或者`<i>`并增加对应的CSS类名即可，用来作为图标的标签不需要包含任何文本也不应该如此。

```html
<i class="fa fa-star"></i>
```

### 注意要点

使用图标字体有一个好处就是图标就是文本字符，所有能用于文本的样式都可以用于图标，这样就可以随意定义图标的大小、颜色，甚至一些CSS3特效。但应该在同一个应用程序中图标应具有统一的样式，包含如下内容：

*   图标应具备统一的颜色，如果有交互行为样式也应该保持一致；
*   图标的大小应该保持一致，正文中的图标大小应为14px，标题中的图标可以为28px；
*   图标应与所指示的内容对应，不同地方的同一个指示内容应该使用同一个图标。

<div class="alert alert-danger">
  <p>
  不要将在任何控件标签上直接应用图标CSS类名，应该嵌套一个单独的<code>&lt;span&gt;</code>标签或者<code>&lt;i&gt;</code>标签。</p>
</div>

### *等宽图标

通常情况下 `.fa-*` 不需要和 `.fa` 类一起使用，但由于不同的图标外形不同，其在文字行中所占据的宽度也不同，如果需要使图标的宽度一致，则需要为 `.fa-*` 添加 `.fa` 类，这样就得到等宽图标。

等宽图标对于在一个列表中用于垂直对其图标非常有必要。

<example>
  <div class="row">
    <div class="col-sm-6">
      <ul style="margin: 0">
        <li><i class="fa-flag"></i> 普通图标</li>
        <li><i class="fa-heart"></i> <span class="code">fa-heart</span></li>
        <li><i class="fa-resize-o"></i> <span class="code">fa-resize-o</span></li>
        <li><i class="fa-film"></i> <span class="code">fa-film</span></li>
      </ul>
    </div>
    <div class="col-sm-6">
      <ul style="margin: 0">
        <li><i class="fa fa-flag"></i> 等宽图标</li>
        <li><i class="fa fa-heart"></i> <span class="code">fa fa-heart</span></li>
        <li><i class="fa fa-resize-o"></i> <span class="code">fa fa-resize-o/span></li>
        <li><i class="fa fa-film"></i> <span class="code">fa fa-film</span></li>
      </ul>
    </div>
  </div>
</example>

```html
<ul>
  <li><i class="fa-flag"></i> 普通图标</li>
  <li><i class="fa-heart"></i> fa-heart</li>
  <li><i class="fa-resize-o"></i> fa-resize-o</li>
  <li><i class="fa-film"></i> fa-film</li>
</ul>

<ul>
  <li><i class="fa fa-flag"></i> 等宽图标</li>
  <li><i class="fa fa-heart"></i> fa fa-heart</li>
  <li><i class="fa icon-resize-v"></i> fa fa-resize-v</li>
  <li><i class="fa fa-film"></i> fa fa-film</li>
</ul>
```

### *预设的图标尺寸

<div class="example">
  <table class="table table-icons-example">
    <tbody><tr>
      <td>正常大小</td>
      <td><i class="fa fa-camera-retro"></i></td>
      <td><pre><code>&lt;i class="fa fa-camera-retro"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td>.fa-lg</td>
      <td><i class="fa fa-camera-retro fa-lg"></i></td>
      <td><pre><code>&lt;i class="fa fa-camera-retro <em>fa-lg</em>" &gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.fa-2x</code></td>
      <td><i class="fa fa-camera-retro fa-2x"></i></td>
      <td><pre><code>&lt;i class="fa fa-camera-retro  <em>fa-2x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.fa-3x</code></td>
      <td><i class="fa fa-camera-retro fa-3x"></i></td>
      <td><pre><code>&lt;i class="fa fa-camera-retro <em>fa-3x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.fa-4x</code></td>
      <td><i class="fa fa-camera-retro fa-4x"></i></td>
      <td><pre><code>&lt;i class="fa fa-camera-retro <em>fa-4x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
    <tr>
      <td><code>.fa-5x</code></td>
      <td><i class="fa fa-camera-retro fa-5x"></i></td>
      <td><pre><code>&lt;i class="fa fa-camera-retro <em>fa-5x</em>"&gt;&lt;/i&gt;</code></pre></td>
    </tr>
  </tbody></table>
</div>

### *用于列表
使用 fa-ul 和 fa-li 便可以简单的将无序列表的默认符号替换掉。
<div class="example">
  <tbody>
   <tr>
     <td>
          <ul class="fa-ul">
              <li><i class="fa-li fa fa-check-square"></i>List icons</li>
              <li><i class="fa-li fa fa-check-square"></i>can be used</li>
              <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
              <li><i class="fa-li fa fa-square"></i>in lists</li>
            </ul>
     </td>
   </tr>
   </tbody>
</div>

```html

  <ul class="fa-ul">
     <li><i class="fa-li fa fa-check-square"></i>List icons</li>
     <li><i class="fa-li fa fa-check-square"></i>can be used</li>
     <li><i class="fa-li fa fa-spinner fa-spin"></i>as bullets</li>
     <li><i class="fa-li fa fa-square"></i>in lists</li>
   </ul>

```

### *旋转与翻转
   使用 fa-rotate-* 和 fa-flip-* 类可以对图标进行任意旋转和翻转。

<div class="example">
    <i class="fa fa-shield"></i> normal<br>
    <i class="fa fa-shield fa-rotate-90"></i> fa-rotate-90<br>
    <i class="fa fa-shield fa-rotate-180"></i> fa-rotate-180<br>
    <i class="fa fa-shield fa-rotate-270"></i> fa-rotate-270<br>
    <i class="fa fa-shield fa-flip-horizontal"></i> fa-flip-horizontal<br>
    <i class="fa fa-shield fa-flip-vertical"></i> icon-flip-vertical
</div>

```html

    <i class="fa fa-shield"></i> normal<br>
    <i class="fa fa-shield fa-rotate-90"></i> fa-rotate-90<br>
    <i class="fa fa-shield fa-rotate-180"></i> fa-rotate-180<br>
    <i class="fa fa-shield fa-rotate-270"></i> fa-rotate-270<br>
    <i class="fa fa-shield fa-flip-horizontal"></i> fa-flip-horizontal<br>
    <i class="fa fa-shield fa-flip-vertical"></i> icon-flip-vertical

```

#### *动画
使用 fa-spin 类来使任意图标旋转，现在您还可以使用 fa-pulse 来使其进行8方位旋转。尤其适合 fa-spinner、fa-refresh 和 fa-cog 。
<p class="alert alert-success">
<i class="fa fa-info-circle"></i> CSS3动画不支持IE8-IE9。
</p>

<div class="example">
  <i class="fa fa-spinner fa-spin"></i>
  <i class="fa fa-circle-o-notch fa-spin"></i>
  <i class="fa fa-refresh fa-spin"></i>
  <i class="fa fa-cog fa-spin"></i>
  <i class="fa fa-spinner fa-pulse"></i>
</div>

```html
  <i class="fa fa-spinner fa-spin"></i>
```

```html
  <i class="fa fa-circle-o-notch fa-spin"></i>
```

```html
  <i class="fa fa-refresh fa-spin"></i>
```

```html
  <i class="fa fa-cog fa-spin"></i>
```
```html
  <i class="fa fa-spinner fa-pulse"></i>
```


<script>
function afterPageLoad() {
    if($.doc) {
        var url = $('body').hasClass('layout-page') ? '../icons.json' : 'docs/icons.json';
        $.doc.loadData(url, function(data) {
            var iconCount = 0;
            var $list = $('<ul class="clearfix"></ul>');
            $.each(data, function(name, icon) {
                iconCount++;
                var $li = $('<li><a href="#search/fa-' + name + '"><i class="fa fa-' + name + '"></i> ' + name + '</a></li>');
                icon.id = name;
                $li.data('fa', icon);
                $list.append($li);
            });
            $('#iconsExample').empty().append($list);
            $('#pageBody .icons-count').text(iconCount);
        });
    }
}
</script>
