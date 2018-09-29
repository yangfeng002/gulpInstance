section: javascript
id: echarts
description: echarts各种图表
icon: fa-laptop
filter:tubiao tb
---

# echarts插件

## 用法

弹出层插件为独立组件，你需要从本地或 CDN 单独引入 lib 目录下的资源<br>
<b class="text-danger">注意</b>：<br>
  echarts有echarts.common.js（常用版，折 柱 饼 散点 图例工具栏 标注/线/域数据区域缩放）<br>
  echarts.js（所有的图表）<br>
  echartsLite.js（简洁版，只有折柱饼图）<br>

```html
<script src="dist/lib/jquery/jquery.js" type="text/javascript"></script>
<script src="dist/lib/echarts/type/echartsCommon.js" type="text/javascript"></script>
```

## 示例
注意：以下仅列举了几个用法，更多详情可访问<a href="http://echarts.baidu.com/examples/" target="_blank"><b>echarts</b></a>官方网站参考使用。

### 折线图
<div class="example clearfix">
   <div id="chart1" style="height:400px;width:auto;"></div>
</div>

html代码如下：
```html
<div class="example clearfix">
 <div id="chart1" style="height:400px;width:auto;"></div>
</div>
```

js代码如下：
```js
   //step1:获取echarts实例对象
    var myChart = echarts.init(document.getElementById('chart1'));
    //step2:指定图表的配置项和数据
    var option1 = { title: {
                             text: '堆叠区域图'
                         },
                         tooltip : {
                             trigger: 'axis',
                             axisPointer: {
                                 type: 'cross',



                                 label: {
                                     backgroundColor: '#6a7985'
                                 }
                             }
                         },
                         legend: {
                             data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                         },
                         toolbox: {
                             feature: {
                                 saveAsImage: {}
                             }
                         },
                         grid: {
                             left: '3%',
                             right: '4%',
                             bottom: '3%',
                             containLabel: true
                         },
                         xAxis : [
                             {
                                 type : 'category',
                                 boundaryGap : false,
                                 data : ['周一','周二','周三','周四','周五','周六','周日']
                             }
                         ],
                         yAxis : [
                             {
                                 type : 'value'
                             }
                         ],
                         series : [
                             {
                                 name:'邮件营销',
                                 type:'line',
                                 stack: '总量',
                                 areaStyle: {},
                                 data:[120, 132, 101, 134, 90, 230, 210]
                             },
                             {
                                 name:'联盟广告',
                                 type:'line',
                                 stack: '总量',
                                 areaStyle: {},
                                 data:[220, 182, 191, 234, 290, 330, 310]
                             },
                             {
                                 name:'视频广告',
                                 type:'line',
                                 stack: '总量',
                                 areaStyle: {},
                                 data:[150, 232, 201, 154, 190, 330, 410]
                             },
                             {
                                 name:'直接访问',
                                 type:'line',
                                 stack: '总量',
                                 areaStyle: {normal: {}},
                                 data:[320, 332, 301, 334, 390, 330, 320]
                             },
                             {
                                 name:'搜索引擎',
                                 type:'line',
                                 stack: '总量',
                                 label: {
                                     normal: {
                                         show: true,
                                         position: 'top'
                                     }
                                 },
                                 areaStyle: {normal: {}},
                                 data:[820, 932, 901, 934, 1290, 1330, 1320]
                             }
                         ]
                     };
        //step3:使用刚指定的配置项和数据显示图表
        myChart.setOption(option1);

```


### 柱状图
<div class="example clearfix">
   <div id="chart2" style="height:400px;width:auto;"></div>
</div>

html代码如下：
```html
<div class="example clearfix">
 <div id="chart2" style="height:400px;width:auto;"></div>
</div>
```

js代码如下：
```js
   //step1:获取echarts实例对象
    var myChart2 = echarts.init(document.getElementById('chart2'));
    //step2:指定图表的配置项和数据
    var option2 = {
                      color: ['#3398DB'],
                      tooltip : {
                          trigger: 'axis',
                          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          }
                      },
                      grid: {
                          left: '3%',
                          right: '4%',
                          bottom: '3%',
                          containLabel: true
                      },
                      xAxis : [
                          {
                              type : 'category',
                              data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                              axisTick: {
                                  alignWithLabel: true
                              }
                          }
                      ],
                      yAxis : [
                          {
                              type : 'value'
                          }
                      ],
                      series : [
                          {
                              name:'直接访问',
                              type:'bar',
                              barWidth: '60%',
                              data:[10, 52, 200, 334, 390, 330, 220]
                          }
                      ]
                  };
        //step3:使用刚指定的配置项和数据显示图表
        myChart2.setOption(option2);

```

### 饼图
<div class="example clearfix">
  <div id="chart3" style="height:300px;width:auto;"></div>
</div>

html代码如下：
```html
<div class="example clearfix">
  <div id="chart3" style="height:300px;width:auto;"></div>
</div>
```

js代码如下：
```js
   //step1:获取echarts实例对象
    var myChart3 = echarts.init(document.getElementById('chart3'));
    //step2:指定图表的配置项和数据
    var option3 =  {
                      title : {
                          text: '某站点用户访问来源',
                          subtext: '纯属虚构',
                          x:'center'
                      },
                      tooltip : {
                          trigger: 'item',
                          formatter: "{a} <br/>{b} : {c} ({d}%)"
                      },
                      legend: {
                          orient: 'vertical',
                          left: 'left',
                          data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                      },
                      series : [
                          {
                              name: '访问来源',
                              type: 'pie',
                              radius : '55%',
                              center: ['50%', '60%'],
                              data:[
                                  {value:335, name:'直接访问'},
                                  {value:310, name:'邮件营销'},
                                  {value:234, name:'联盟广告'},
                                  {value:135, name:'视频广告'},
                                  {value:1548, name:'搜索引擎'}
                              ],
                              itemStyle: {
                                  emphasis: {
                                      shadowBlur: 10,
                                      shadowOffsetX: 0,
                                      shadowColor: 'rgba(0, 0, 0, 0.5)'
                                  }
                              }
                          }
                      ]
                  };

        //step3:使用刚指定的配置项和数据显示图表
        myChart3.setOption(option3);

```



### 折线和柱状图
<div class="example clearfix">
  <div id="chart4" style="height:400px;width:auto;"></div>
</div>

html代码如下：
```html
<div class="example clearfix">
   <div id="chart4" style="height:400px;width:auto;"></div>
</div>
```

js代码如下：
```js
   //step1:获取echarts实例对象
    var myChart4 = echarts.init(document.getElementById('chart4'));
    //step2:指定图表的配置项和数据
    var option4 ={
                     tooltip: {
                         trigger: 'axis',
                         axisPointer: {
                             type: 'cross',
                             crossStyle: {
                                 color: '#999'
                             }
                         }
                     },
                     toolbox: {
                         feature: {
                             dataView: {show: true, readOnly: false},
                             magicType: {show: true, type: ['line', 'bar']},
                             restore: {show: true},
                             saveAsImage: {show: true}
                         }
                     },
                     legend: {
                         data:['蒸发量','降水量','平均温度']
                     },
                     xAxis: [
                         {
                             type: 'category',
                             data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                             axisPointer: {
                                 type: 'shadow'
                             }
                         }
                     ],
                     yAxis: [
                         {
                             type: 'value',
                             name: '水量',
                             min: 0,
                             max: 250,
                             interval: 50,
                             axisLabel: {
                                 formatter: '{value} ml'
                             }
                         },
                         {
                             type: 'value',
                             name: '温度',
                             min: 0,
                             max: 25,
                             interval: 5,
                             axisLabel: {
                                 formatter: '{value} °C'
                             }
                         }
                     ],
                     series: [
                         {
                             name:'蒸发量',
                             type:'bar',
                             data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                         },
                         {
                             name:'降水量',
                             type:'bar',
                             data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                         },
                         {
                             name:'平均温度',
                             type:'line',
                             yAxisIndex: 1,
                             data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                         }
                     ]
                 };
        //step3:使用刚指定的配置项和数据显示图表
        myChart4.setOption(option4);

```

<script src="dist/lib/echarts/type/echartsCommon.js" type="text/javascript"></script>
<script>
   $(function(){
      //折线图示例
       var myChart = echarts.init(document.getElementById('chart1'));
       var option1 = { title: {
                            text: '堆叠区域图'
                        },
                        tooltip : {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross',



                                label: {
                                    backgroundColor: '#6a7985'
                                }
                            }
                        },
                        legend: {
                            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                        },
                        toolbox: {
                            feature: {
                                saveAsImage: {}
                            }
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        xAxis : [
                            {
                                type : 'category',
                                boundaryGap : false,
                                data : ['周一','周二','周三','周四','周五','周六','周日']
                            }
                        ],
                        yAxis : [
                            {
                                type : 'value'
                            }
                        ],
                        series : [
                            {
                                name:'邮件营销',
                                type:'line',
                                stack: '总量',
                                areaStyle: {},
                                data:[120, 132, 101, 134, 90, 230, 210]
                            },
                            {
                                name:'联盟广告',
                                type:'line',
                                stack: '总量',
                                areaStyle: {},
                                data:[220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                name:'视频广告',
                                type:'line',
                                stack: '总量',
                                areaStyle: {},
                                data:[150, 232, 201, 154, 190, 330, 410]
                            },
                            {
                                name:'直接访问',
                                type:'line',
                                stack: '总量',
                                areaStyle: {normal: {}},
                                data:[320, 332, 301, 334, 390, 330, 320]
                            },
                            {
                                name:'搜索引擎',
                                type:'line',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'top'
                                    }
                                },
                                areaStyle: {normal: {}},
                                data:[820, 932, 901, 934, 1290, 1330, 1320]
                            }
                        ]
                    };
       myChart.setOption(option1);

       //柱状图加载
       //step1:获取echarts实例对象
           var myChart2 = echarts.init(document.getElementById('chart2'));
           //step2:指定图表的配置项和数据
           var option2 = {
                             color: ['#3398DB'],
                             tooltip : {
                                 trigger: 'axis',
                                 axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                     type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                 }
                             },
                             grid: {
                                 left: '3%',
                                 right: '4%',
                                 bottom: '3%',
                                 containLabel: true
                             },
                             xAxis : [
                                 {
                                     type : 'category',
                                     data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                                     axisTick: {
                                         alignWithLabel: true
                                     }
                                 }
                             ],
                             yAxis : [
                                 {
                                     type : 'value'
                                 }
                             ],
                             series : [
                                 {
                                     name:'直接访问',
                                     type:'bar',
                                     barWidth: '60%',
                                     data:[10, 52, 200, 334, 390, 330, 220]
                                 }
                             ]
                         };
               //step3:使用刚指定的配置项和数据显示图表
               myChart2.setOption(option2);

               /* 饼图加载*/
               //step1:获取echarts实例对象
                   var myChart3 = echarts.init(document.getElementById('chart3'));
                   //step2:指定图表的配置项和数据
                   var option3 =  {
                                     title : {
                                         text: '某站点用户访问来源',
                                         subtext: '纯属虚构',
                                         x:'center'
                                     },
                                     tooltip : {
                                         trigger: 'item',
                                         formatter: "{a} <br/>{b} : {c} ({d}%)"
                                     },
                                     legend: {
                                         orient: 'vertical',
                                         left: 'left',
                                         data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                                     },
                                     series : [
                                         {
                                             name: '访问来源',
                                             type: 'pie',
                                             radius : '55%',
                                             center: ['50%', '60%'],
                                             data:[
                                                 {value:335, name:'直接访问'},
                                                 {value:310, name:'邮件营销'},
                                                 {value:234, name:'联盟广告'},
                                                 {value:135, name:'视频广告'},
                                                 {value:1548, name:'搜索引擎'}
                                             ],
                                             itemStyle: {
                                                 emphasis: {
                                                     shadowBlur: 10,
                                                     shadowOffsetX: 0,
                                                     shadowColor: 'rgba(0, 0, 0, 0.5)'
                                                 }
                                             }
                                         }
                                     ]
                                 };

                       //step3:使用刚指定的配置项和数据显示图表
                       myChart3.setOption(option3);

         /*柱状图和折线图组合*/
            //step1:获取echarts实例对象
             var myChart4 = echarts.init(document.getElementById('chart4'));
             //step2:指定图表的配置项和数据
             var option4 ={
                              tooltip: {
                                  trigger: 'axis',
                                  axisPointer: {
                                      type: 'cross',
                                      crossStyle: {
                                          color: '#999'
                                      }
                                  }
                              },
                              toolbox: {
                                  feature: {
                                      dataView: {show: true, readOnly: false},
                                      magicType: {show: true, type: ['line', 'bar']},
                                      restore: {show: true},
                                      saveAsImage: {show: true}
                                  }
                              },
                              legend: {
                                  data:['蒸发量','降水量','平均温度']
                              },
                              xAxis: [
                                  {
                                      type: 'category',
                                      data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
                                      axisPointer: {
                                          type: 'shadow'
                                      }
                                  }
                              ],
                              yAxis: [
                                  {
                                      type: 'value',
                                      name: '水量',
                                      min: 0,
                                      max: 250,
                                      interval: 50,
                                      axisLabel: {
                                          formatter: '{value} ml'
                                      }
                                  },
                                  {
                                      type: 'value',
                                      name: '温度',
                                      min: 0,
                                      max: 25,
                                      interval: 5,
                                      axisLabel: {
                                          formatter: '{value} °C'
                                      }
                                  }
                              ],
                              series: [
                                  {
                                      name:'蒸发量',
                                      type:'bar',
                                      data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
                                  },
                                  {
                                      name:'降水量',
                                      type:'bar',
                                      data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                                  },
                                  {
                                      name:'平均温度',
                                      type:'line',
                                      yAxisIndex: 1,
                                      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
                                  }
                              ]
                          };
                 //step3:使用刚指定的配置项和数据显示图表
                 myChart4.setOption(option4);
   })
</script>
