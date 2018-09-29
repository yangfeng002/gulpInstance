/*fn1:获取相关插件*/
var extend = require('extend'),
    runSequence = require('run-sequence'),//引入任务执行顺序模块
    fs = require('fs'),//引入fs模块，处理文件相关（nodejs中的模块）
    chmod = require('gulp-chmod'),//修改权限用的
    moment = require('moment'),//引入nodejs中的模块moment
    less = require('gulp-less'),//用来将less文件转换为css文件的
    cssmin = require('gulp-cssmin'),//压缩css代码
    csscomb = require('gulp-csscomb'),//csscomb是一个实现css代码自动排序，当然顺便也实现了代码的格式化
    autoprefixer = require('gulp-autoprefixer'),//自动添加前缀
    concat = require('gulp-concat'),//实现代码合并
    header = require('gulp-header'),//用来添加头部注释用的模块（通常是作者信息、描述、作者、版本号等等）
    uglify = require('gulp-uglify'),//用于js代码压缩
    rename = require('gulp-rename'),//用来重新命名
    change = require('gulp-change'),//gulp-changed插件的作用，是用来过滤未被修改过的文件，只有修改后的文件才能通过管道。这样做的好处时，只处理修改后的文件，减少后续程序的执行时间。
    sourcemaps = require('gulp-sourcemaps'),//生成sourcemap文件(简单讲就是文件压缩后不利于查看与调试，但是有了sourcemap，出错的时候，出错工具将直接显示原始代码，而不是转换后的代码）
    prettify = require('gulp-jsbeautifier'),//用来美化js代码的
    mkdirp = require('mkdirp'),//能够生成创建文件夹中间所有层级
    del = require('del'),//nodeJs中删除模块
    format = require('string-format').extend(String.prototype),
    colors = require('colors'),//控制控制台的颜色
    gulp = require('gulp'),//gulp模块
    jsonminify = require('gulp-jsonminify'),//压缩json文件
    mgui = require('./mgui.json'),//获取mgui的json文件
    pkg = require('./package.json'),//获取npm的包
    showFileDetail = true;

  /*fn2:关闭到npm安装时的一些警告限制*/
  gulp.setMaxListeners(0);

    /*获取源文件*/
    var origSrc = gulp.src;
    gulp.src = function () {
        return fixPipe(origSrc.apply(this, arguments));
    };
   function fixPipe(stream) {
    var origPipe = stream.pipe;
    stream.pipe = function (dest) {
        arguments[0] = dest.on('error', function (error) {
            var nextStreams = dest._nextStreams;
            if (nextStreams) {
                nextStreams.forEach(function (nextStream) {
                    nextStream.emit('error', error);
                });
            } else if (dest.listeners('error').length === 1) {
                throw error;
            }
        });
        var nextStream = fixPipe(origPipe.apply(this, arguments));
        (this._nextStreams || (this._nextStreams = [])).push(nextStream);
        return nextStream;
    };
    return stream;
}
    // try load mgui.templates.json and merge into mgui.
    /*try {
        extend(true, mgui, require('./mgui.templates.json'));
    } catch (e) { }

    // try load mgui.custom.json and merge into mgui.
    try {
        var mguicustom = require('./mgui.custom.json');
        if (mguicustom) extend(true, mgui, mguicustom);
    } catch (e) { }*/

var today = moment();//获取时间对象
var typeSet = ['less', 'js', 'resource'],
    lib = mgui.lib,//获取json里面的各种lib包
    builds = mgui.builds,//构建不同的版本（标准版、主题版、简介版、分离版、文档版等）
    /*标语设置*/
    BANNER = ('/*!\n' +
        ' * {title} - v{version} - {date}\n' +
        ' * {homepage}\n' +
        ' * GitHub: {repo} \n' +
        ' * Copyright (c) {year} {author}; Licensed {license}\n' +
        ' */\n\n'),
    BANNER_OPTONS = {
        title: pkg.title || pkg.name,
        version: pkg.version,
        date: today.format('YYYY-MM-DD'),
        homepage: pkg.homepage,
        repo: pkg.repository.url,
        year: today.format('YYYY'),
        author: pkg.author,
        license: pkg.license
    },
    BOOTSTRAP_STATEMENT = '/*! Some code copy from Bootstrap v3.0.0 by @fat and @mdo. (Copyright 2013 Twitter, Inc. Licensed under http://www.apache.org/licenses/)*/\n\n';

/*标语格式化方法*/
function formatBanner(options) {
    if (options && options.title) {
        options.title = BANNER_OPTONS.title + ': ' + options.title;
    }
    options = Object.assign({}, BANNER_OPTONS, options);
    return BANNER.format(options);
}
/**/
function tryStatSync(path) {
    try {
        /*statSync方法返回一个stat数组对象*/
        return fs.statSync(path);
    } catch (e) {
        return false;
    }
}
/*判断文件是否存在*/
function isFileExist(path) {
    var stats = tryStatSync(path);
    return stats && stats.isFile();
}

function getItemList(list, items, ignoreDpds, ignoreBasic) {
    items = items || [];

    if (Array.isArray(list)) {
        list.forEach(function (name) {
            if (name === 'basic' && ignoreBasic) return;
            getItemList(name, items, ignoreDpds, ignoreBasic);
        });
    } else if (!(list === 'basic' && ignoreBasic)) {
        var item = lib[list];
        if (item && items.indexOf(list) < 0) {
            if (!ignoreDpds && item.dpds) {
                getItemList(item.dpds, items, ignoreDpds, ignoreBasic);
            }
            if (item.libDpds) {
                getItemList(item.libDpds, items, ignoreDpds, ignoreBasic);
            }
            if (item.src) items.push(list);
        }
    }

    return items;
}

function getBuildSource(build) {
    var list = [];

    var sources = {
        less: [],
        js: [],
        resource: []
    };

    if (!Array.isArray(list)) list = [list];

    if (build.settingDpds) list = getItemList(build.settingDpds, list);
    list = getItemList(build.includes, list, build.ignoreDpds, build.ignoreBasic);

    list.forEach(function (item) {
        var libItem = lib[item];
        if (libItem && libItem.src) {
            typeSet.forEach(function (type) {
                if (libItem.src[type]) {
                    libItem.src[type].forEach(function (file) {
                        if (sources[type].indexOf(file) < 0) {
                            sources[type].push(file);
                        }
                    });
                }
            });
        }
    });

    return sources;
}

function getSourceConfig(src) {
    var idx = src.lastIndexOf('//');
    if (idx > 0) {
        return {
            base: src.substr(0, idx + 1),
            src: src.replace(/\/\//g, '/'),
            file: src.substr(idx + 2)
        };
    }
    idx = src.lastIndexOf('/');
    return {
        base: src.substr(0, idx + 1),
        src: src,
        file: src.substr(idx + 1)
    }
}

function getBuildPath(build, type) {
    var path = build.dest;
    if (build.subdirectories) {
        path += '/' + type + '/';
    }
    if (path.indexOf('.') !== 0) {
        path = './' + path;
    }
    return path.replace(/\/\//g, '/').replace(/\/\//g, '/');
}

function getBuildDestFilename(build, type, suffix) {
    var file = getBuildPath(build, type);
    file += '/' + build.filename + '.' + (suffix || type);
    return file.replace(/\/\//g, '/');
}

function gulpBuildColorsetJS(build, lessSrc, bannerContent) {
    var name = 'build:' + build.name;
    var destPath = getBuildPath(build, 'js');
    return gulp.src(lessSrc)
        .pipe(less())
        .pipe(rename({
            extname: '.js'
        }))
        .pipe(change(function (css, done) {
            css = css.replace(/\/\*\*/g, '').replace(/\*\*\//g, '');
            css = css.replace(/\.color-(\w+) \{\n  color: (#?\w+);\n\}/g, "        $1: '$2',");
            css = css.replace(',\n    };', '\n    };');
            css = css.replace('\n\n', '\n');
            done(null, css);
        }))
        .pipe(header(bannerContent))
        .pipe(gulp.dest(destPath))
        .on('end', function () {
            console.log('     js > '.yellow.bold + (destPath + build.filename + '.js').italic.underline);
        });
}

/*创建打包生成相关文件*/
function buildBundle(name, callback, type) {
    name = name || 'all';
    var build = builds[name];//builds为要构建的版本
    var taskList = [], depTaskList = [];

    // clean files 先清理目标目录
    if (!type && name === 'dist') {
        del.sync('./dist/**/*');
    } else if (!type && name === 'doc') {
        del.sync([
            './docs/js/**/*',
            './docs/css/**/*',
            './docs/fonts/**/*'
        ]);
    }

    if (!build) {
       /* 如果没有获取到要构建那个指定版本时，则需要构建全部的*/
        if (name === 'all') {
            console.log('           ========== BUILD ALL =========='.blue.bold);
            var buildList = Object.keys(builds);
            buildList.forEach(function (nm) {
                build = builds[nm];
                if (build && !build.bundles) {
                    var taskName = 'build:' + nm;
                    gulp.task(taskName, function (cb) {
                        buildBundle(nm, cb, type)
                    });
                    taskList.push(taskName);
                }
            });
            if (taskList.length) runSequence(taskList, function () {
                console.log(('        √  Build ' + 'ALL'.bold + ' success! ').green);
                callback && callback();
            });
            return;
        }else {
            var buildLib = lib[name];
            if (buildLib) {
                build = {
                    title: buildLib.name,
                    dest: 'dist/lib/' + name + '/',
                    filename: buildLib.filename || ((buildLib.source && buildLib.source !== 'Bootstrap') ? name : ('mgui.' + name)),
                    includes: [name],
                    source: buildLib.source,
                    settingDpds: (buildLib.src && buildLib.src.less && buildLib.src.less.length) ? ['setting'] : null,
                    ignoreBasic: true,
                    ignoreDpds: buildLib.ignoreDpds !== undefined ? buildLib.ignoreDpds : true
                };
            } else {
                console.log(('           Cannot found the build config: ' + name).red);
                return false;
            }
        }
    }else if (build.bundles) {
        console.log(('           === BUILD BUNDLES ' + name.toUpperCase() + ' [' + build.bundles.join(', ') + '] ===').blue.bold);
        var bundlesTaskList = [];
        build.bundles.forEach(function (bundleName) {
            gulp.task('build:' + bundleName, function (cb) {
                buildBundle(bundleName, cb, type);
            });

            bundlesTaskList.push('build:' + bundleName);
        });

        gulp.task('build:' + name + ':bundles', function (cb) {
            runSequence(bundlesTaskList, function () {
                console.log(('         √ Build BUNDLES ' + name.toUpperCase() + ' [' + build.bundles.map(function (x) { return x.bold; }).join(', ') + '] success! ').green);
                cb();
            });
        });

        depTaskList.push('build:' + name + ':bundles');
    }

    if (build.preBuilds) {
        build.preBuilds.forEach(function (pBuildName) {
            var pBuild = builds[pBuildName];
            if (pBuild && pBuild.includes) {
                build.includes = pBuild.includes.concat(build.includes);
            }
        });
    }

    if (build.includes && build.includes.indexOf('colorset.js') > -1) {
        gulp.task('build:colorset.less2js', function (cb) {
            buildBundle('colorset.less2js', cb, 'less');
        });

        depTaskList.push('build:colorset.less2js');
    }

    console.log(('           --- build ' + name + ' ---').cyan.bold);

    var banner = formatBanner({ title: build.title || name });
    var source = getBuildSource(build),
        bannerContent = (build.source && build.source !== 'Bootstrap') ?
            '' : banner + (build.bootstrapStatement ? BOOTSTRAP_STATEMENT : '');

    if (source.js && source.js.length && (!type || type === 'js')) {
        console.log(('         + Ready to process ' + source.js.length + ' javascript files.').bold);
        source.js.forEach(function (f, idx) {
            if (f.indexOf('~/') === 0) {
                source.js[idx] = f = 'src/js/' + f.substr(2);
            }
            if (showFileDetail) console.log(('         | ' + f).italic);
        });

        //ar taskName = 'build:' + name + ':js';
        gulp.task('build:' + name + ':js', function () {
            var destPath = getBuildPath(build, 'js');
            return gulp.src(source.js)
                .pipe(concat(build.filename + '.js'))
                .pipe(header(bannerContent))
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('      js > '.yellow.bold + (destPath + build.filename + '.js').italic.underline);
                })
                //.pipe(sourcemaps.init())
                .pipe(uglify({ preserveComments: 'some' }))
                .pipe(rename({
                    suffix: '.min'
                }))
                //.pipe(sourcemaps.write())
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('      js > '.yellow.bold + (destPath + build.filename + '.min.js').italic.underline);
                });
        });
        taskList.push('build:' + name + ':js');
    }

    if (source.less && source.less.length && (!type || type === 'less')) {
        var lessFileContent = '// \n// ' + build.title + '\n// Build config: ' + name + '\n//\n// This file generated by MGUI builder automatically at ' + today.toString() + '.\n//\n\n';
        console.log(('         + Ready to process ' + source.less.length + ' less files.').bold);
        source.less.forEach(function (f, idx) {
            if (f.indexOf('~/') === 0) {
                source.less[idx] = f = 'src/less/' + f.substr(2);
            }

            if (isFileExist(f)) {
                lessFileContent += '@import "';
                lessFileContent += '../../' + f;
                lessFileContent += '";\n';
                if (showFileDetail) console.log(('         | ' + f).italic);
            } else {
                lessFileContent += '// @import "';
                lessFileContent += '../../' + f;
                lessFileContent += '" // FILE NOT FOUND;\n';
                if (showFileDetail) console.log(('         - ' + f + ' [NOT FOUND]').red.italic);
            }
        });

        gulp.task('build:' + name + ':less', function () {
            var buildSourceFilePath = './build/less/' + build.filename + '.less';
            var destPath = getBuildPath(build, 'css');

            mkdirp.sync('./build/less/');
            fs.writeFileSync(buildSourceFilePath, lessFileContent);

            if (name === 'colorset.less2js') {
                return gulpBuildColorsetJS(build, buildSourceFilePath, bannerContent);
            }

            return gulp.src(buildSourceFilePath)
                .pipe(less())
                .pipe(autoprefixer({
                    browsers: ["Android 2.3",
                        "Android >= 4",
                        "Chrome >= 20",
                        "Firefox >= 24",
                        "Explorer >= 8",
                        "iOS >= 6",
                        "Opera >= 12",
                        "Safari >= 6"],
                    cascade: true
                }))
                .pipe(csscomb())
                .pipe(header(bannerContent))
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('     css > '.yellow.bold + (destPath + build.filename + '.css').italic.underline);
                })
                //.pipe(sourcemaps.init())
                .pipe(cssmin({
                    compatibility: 'ie8',
                    keepSpecialComments: '*',
                    sourceMap: true,
                    advanced: false
                }))
                .pipe(rename({
                    suffix: '.min'
                }))

                //.pipe(sourcemaps.write())
                .pipe(chmod(644))
                .pipe(gulp.dest(destPath))
                .on('end', function () {
                    console.log('     css > '.yellow.bold + (destPath + build.filename + '.min.css').italic.underline);
                });
        });
        taskList.push('build:' + name + ':less');
    }

    if (source.resource && source.resource.length && (!type || type === 'resource')) {
        console.log(('         + Ready to process ' + source.resource.length + ' resource files.').bold);
        var destPath = getBuildPath(build, '');
        source.resource.forEach(function (f, idx) {
            if (f.indexOf('~/') === 0) {
                source.resource[idx] = f = 'src//' + f.substr(2);
            }
            if (showFileDetail) console.log(('         | [' + idx + '] ' + f).italic);
            gulp.task('build:' + name + ':resource:' + idx, function () {
                var sourceConfig = getSourceConfig(f);
                return gulp.src(sourceConfig.src, {
                    base: sourceConfig.base
                })
                    .pipe(chmod(644))
                    .pipe(gulp.dest(destPath))
                    .on('end', function () {
                        console.log('resource > '.yellow.bold + (destPath + sourceConfig.file).italic.underline);
                    });
            });
            taskList.push('build:' + name + ':resource:' + idx);
        });
    }

    if (taskList.length || depTaskList.length) {
        var completeCallback = function () {
            console.log(('         √ Build ' + name.bold + ' success! ').green);
            callback && callback();
        };

        if (taskList.length) {
            if (depTaskList.length) {
                runSequence(depTaskList, taskList, completeCallback);
            } else {
                runSequence(taskList, completeCallback);
            }
        } else {
            runSequence(depTaskList, completeCallback);
        }

    } else {
        console.log(('           No source files for build: ' + name).red);
        callback && callback();
    }
}
/*build任务*/
gulp.task('build', function (callback) {
    var name = process.argv[3] || 'dist';
    if (name && name[0] === '-') name = name.substr(1);
    if (name === 'lib') name = 'seperate';
    var type = process.argv.length > 4 ? process.argv[4] : false;
    if (type && type[0] === '-') type = type.substr(1);
    console.log('  BEGIN >> ' + (' Build ' + name.bold + ' ').inverse);
    buildBundle(name, function () {
        console.log('    END >> ' + (' Build ' + name.bold + ' completed :)').green.inverse);
    }, type);
});

function startWatchSrc(name) {
    if (name === 'lib') name = 'seperate';
    var build = builds[name];
    var srcDir = build && build.srcDir || './src';
    gulp.watch([srcDir + "/less/**/*"], function (event) {
        buildBundle(name, function () {
            console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
        }, 'less');
    });

    gulp.watch([srcDir + "/js/**/*"], function (event) {
        if (event.path && (event.path.lastIndexOf('src/js/colorset.js') > -1) || event.path.lastIndexOf('src\\js\\colorset.js') > -1) return;
        buildBundle(name, function () {
            console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
        }, 'js');
    });

    gulp.watch([srcDir + "/fonts/**/*"], function (event) {
        buildBundle(name, function () {
            console.log('         √ '.green + (' WATCH ' + name.bold + ' COMPLETED. ').yellow.inverse);
        }, 'resource');
    });
}

/*gulp监控任务*/
gulp.task('watch', function (callback) {
    var name = process.argv[3] || 'dist';
    if (name && name[0] === '-') name = name.substr(1);
    startWatchSrc(name);
});

['dist', 'doc', 'theme', 'lib'].forEach(function (name) {
    var depsTasks = (name == 'dist' || name == 'doc') ? ['minJSON'] : [];
    gulp.task(name, depsTasks, function (callback) {
        console.log('  BEGIN >> ' + (' Build ' + name.bold + ' ').inverse);
        buildBundle(name == 'lib' ? 'seperate' : name, function () {
            console.log('    END >> ' + (' Build ' + name.bold + ' completed. ').green.inverse);
            callback();
        });
    });

    gulp.task('watch:' + name, function () {
        startWatchSrc(name);
    });
});

/*压缩json任务--生成压缩版的json文件*/
gulp.task('minJSON', function (cb) {
    gulp.src(['./docs/index.json', './docs/icons.json'])
        .pipe(jsonminify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./docs/'));
    gulp.src(['mgui.json'])
        .pipe(jsonminify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./docs/'));
    cb();
});

gulp.task('prettify:js', function () {
    return gulp.src('./src/js/**/*')
        .pipe(prettify({
            logSuccess: true,
            config: './.jsbeautifyrc',
            mode: 'VERIFY_AND_WRITE'
        }))
        .pipe(gulp.dest('./src/js/'));
});

/*美化任务*/
gulp.task('prettify', ['prettify:js']);

/*默认任务执行*/
gulp.task('default', function () {
    /*调用任务*/
    buildBundle('all');
});

// 初始化自定义的gulpfile文件
if (isFileExist("gulpfile.custom.js")) {
    require("./gulpfile.custom.js")(gulp, {
        chmod: chmod,
        less: less,
        cssmin: cssmin,
        csscomb: csscomb,
        autoprefixer: autoprefixer,
        concat: concat,
        header: header,
        uglify: uglify,
        rename: rename,
        change: change,
        sourcemaps: sourcemaps,
        prettify: prettify,
        buildBundle: buildBundle,
        mgui: mgui,
        pkg: pkg,
        del: del,
        mkdirp: mkdirp,
        runSequence: runSequence
    });
}
