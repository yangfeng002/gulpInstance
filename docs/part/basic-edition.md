section: basic
id: edition
description: 选择合适的版本
icon: fa-film
filter: xuanzebanben xzbb
---

# gulp构建版本

MGUI 中提供了众多丰富的 Web 组件，几乎为你准备构建现代Web应用所有基础内容。但大部分场景并不需要所有组件，所以并没有将所有内容打包为一个 CSS 文件和一个 JS 文件。标准版中仅包含常用的组件，这些组件用于绝大部分场景。

在构建轻量级的应用时需要的内容更少。MGUI预编译版本中提供了一个简洁的版本。简洁版包含了 MGUI 中大部分常用内容，经过压缩后体积更小。你可以在 dist 目录下找到文件名包含 '.lite' 的文件即为简洁版。

## 标准版

在标准版中包含绝大部分常用组件。预编译的标准版包含以下文件：

```
mgui/
└── dist/
    ├── css/                    CSS文件
    │   ├── mgui.css
    │   └── mgui.min.css
    ├── js/                     Javascript文件
    │   ├── mgui.js
    │   └── mgui.min.js
    └── fonts/                  图标字体文件
        ├── mgenicon.eot
        ├── mgenicon.ttf
        ├── mgenicon.woff
        └── mgenicon.svg
```

## 简洁版

在简洁版中包含大部分常用组件。标准版中已包含简洁版的所有内容。预编译的简洁版包含以下文件：

```
mgui/
└── dist/
    ├── css/                     CSS文件
    │   ├── mgui.lite.css
    │   └── mgui.lite.min.css
    ├── js/                      Javascript文件
    │   ├── mgui.lite.js
    │   └── mgui.lite.min.js
    └── fonts/                   图标字体文件
        ├── mgenicon.eot
        ├── mgenicon.ttf
        ├── mgenicon.woff
        └── mgenicon.svg
```

## 独立组件

一些组件可能既不包含在标准版中，也没有包含在简洁版中，使用时只需要按需引用对应的资源文件即可。你可以在以下目录中找到独立组件包含的资源文件：

```
mgui/
└── dist/
    └── lib/                      独立加载的组件
        ├── chosen/               Chosen组件
        ├── datetimepicker/       日期时间选择组件
        ├── datatable/            数据表格组件
        └── ...                   更多组件....
```

<div class="alert alert-warning-inverse">
  <h4>提示</h4>
  <p>MGUI 包含的很多独立组件都需要jQuery和MGUI的其他基础插件支持，所以尽量配合 jQuery 和 MGUI 标准版或简洁版来使用。</p>
</div>


## 使用 Gulp 构建

MGUI 使用 [Gulp](http://gulpjs.com/) 作为构建工具。如果不了解 Gulp 也没有关系，Gulp 是一个非常棒而且容易上手的工具。下面给出简要步骤来准备编译 MGUI，如果想了解更多请访问 [Gulp 官方网站](http://gulpjs.com/)。

### 安装 Gulp

Gulp 构建在nodejs 之上。在安装 Gulp 之前需要首先[下载并安装 node.js](http://nodejs.org/download/)。最新版的 node.js 安装包已包含 npm（[node packaged modules](http://npmjs.org/)）。npm 是nodejs用来管理扩展包的工具。

安装 nodejs 之后，在命令行进行如下操作：

*   在全局环境中安装 gulp ：`npm install -g gulp`；
*   进入 MGUI 源码目录，执行 `npm install` 命令。nmp将读取包配置文件`package.json`文件并自动安装Gulp和所有依赖的扩展包。

### 使用 Gulp 来构建

完成上述步骤就可以进行编译了。只需要进入MGUI中使用命令行输入对应的命令就可以启动编译任务。内置的`build`命令可以完成大部分编译任务。以下为MGUI内置的一些常用任务命令。

<table class="table table-bordered">
  <thead>
    <tr>
      <th style="width: 200px">命令</th>
      <th style="width: 40%">说明</th>
      <th>输出目录</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>`gulp build -standard`</td>
      <td>编译标准版</td>
      <td>
        <ul>
          <li>`dist/js/mgui*.js`</li>
          <li>`dist/css/mgui*.css`</li>
          <li>`dist/fonts/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -lite`</td>
      <td>编译简洁版</td>
      <td>
        <ul>
          <li>`dist/js/mgui.lite*.js`</li>
          <li>`dist/css/mgui.lite*.css`</li>
          <li>`dist/fonts/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -dist`</td>
      <td>编译标准版和简洁版以及常用独立组件</td>
      <td>
        <ul>
          <li>`dist/js/**`</li>
          <li>`dist/css/**`</li>
          <li>`dist/fonts/**`</li>
          <li>`dist/lib/*/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp dist`</td>
      <td>`gulp build -dist`的简单写法</td>
      <td>
        <ul>
          <li>`dist/js/**`</li>
          <li>`dist/css/**`</li>
          <li>`dist/fonts/**`</li>
          <li>`dist/lib/*/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp lib`</td>
      <td>`gulp build -lib`的简单写法，编译所有独立组件</td>
      <td>
        <ul>
          <li>`dist/lib/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -doc`</td>
      <td>编译文档所需资源</td>
      <td>
        <ul>
          <li>`doc/js/mgui*.js`</li>
          <li>`doc/css/mgui*.css`</li>
          <li>`doc/fonts/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -theme`</td>
      <td>编译主题</td>
      <td>
        <ul>
          <li>`dist/css/mgui-theme*.css`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -[build name]`</td>
      <td>编译独立组件包，`[build name]`为组件包名称，可以为`calendar`、`kindeditor`、`chosen`等</td>
      <td>
        <ul>
          <li>`dist/lib/[build name]/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp build -[control name]`</td>
      <td>编译单独控件，`[control name]`为控件名称，可以为`button`、`alerts`、`panels`等</td>
      <td>
        <ul>
          <li>`dist/lib/[control name]/**`</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>`gulp watch:doc`</td>
      <td colspan="2">监听`src/`目录下的文件变更，当文件发生更改之后立即调用 `gulp build -doc`命令。</td>
    </tr>
    <tr>
      <td>`gulp watch:dist`</td>
      <td colspan="2">监听`src/`目录下的文件变更，当文件发生更改之后立即调用 `gulp build -dist`命令。</td>
    </tr>
    <tr>
      <td>`gulp watch:theme`</td>
      <td colspan="2">监听`src/`目录下的文件变更，当文件发生更改之后立即调用 `gulp build -theme`命令。</td>
    </tr>
    <tr>
      <td>`gulp prettify:js`</td>
      <td colspan="2">整理并优化`src/`目录下所有javascript源码文件的代码格式。</td>
    </tr>
  </tbody>
</table>

你也可以通过编辑`gulpfile.js`文件来定义自己的编译任务。

### 自定义gulpfile

你可以在MGUI源码根目录新建一个`gulpfile.custom.js`文件，然后在此文件中自定义更多的gulp任务。

```js
// 文件：gulpfile.custom.js
// 必须导出一个函数 function(gulp, $)
module.exports = function(gulp, $) {
    // 自定义gulp任务'hello'
    gulp.task('hello', function() {
        console.log('hello world!');
    });

    // 第二个参数 $ 包含gulpfile.js中大部分可用工具函数和数据
    // $: {
    //     less: less,
    //     cssmin: cssmin,
    //     csscomb: csscomb,
    //     autoprefixer: autoprefixer,
    //     concat: concat,
    //     header: header,
    //     uglify: uglify,
    //     rename: rename,
    //     change: change,
    //     sourcemaps: sourcemaps,
    //     prettify: jsbeautifier
    //     buildBundle: buildBundle,
    //     mgui: mgui,
    //     pkg: pkg,
    //     del: del,
    //     mkdirp: mkdirp,
    //     runSequence: runSequence
    // }
};
```

<script>
function onPageLoad() {
  return false;
}
function afterPageLoad() {
    if($.doc) {
        $.doc.displayPkgLibTable($('#buildTable'));
    }
    setTimeout($.doc.stopPageLoading, 1500);
}
</script>
