1704 铁府
ng  知乎日报
    PC  修改样式
    移动端  分析

new Date().getDay()
{
	0:"星期日",
	1:"星期一",
	2:"星期二",
	3:"星期三",
	4:"星期四",
	5:"星期五",
	6:"星期六"
}
-----------------------------------
js运行在浏览器端。
在浏览器上：
1. 操作DOM
2. 操作浏览器
3. 游戏
4. 表单验证
5. ajax  
6. 操作cookie
7. 事件驱动
8. 动画
...
-----------------------------------
浏览器：
html文件：标签结构  
css文件： 样式
js文件 ： 逻辑

DOM引擎 分析为DOM树    
CSS引擎 分析样式要作用到谁

重排、重绘

插入节点
---------->
重排、重绘

修改文字颜色
---------->
重绘

JS引擎
JavaScript一门脚本语言。
高级语言 用自然语言写的程序。
    
           编译
自然语言 ------->  二进制

------------------------------
JavaScript 运行在浏览器 

nodejs让JavaScript可以运行浏览器之外。

nodejs内置Google v8引擎。
nodejs是一个JavaScript运行环境。

## nodejs可以运行在哪里？
nodejs可以安装 window 、linux 、 mac 。

## nodejs可以做什么？
nodejs还给我们提供了一些，可以操作文件、数据库、操作系统等接口。
- 操作数据库
- 操作系统 
- 操作cpu 
- 操作网络协议
- 操作文件
....

## 为什么要学习nodejs?
实现了语言层次的全栈。
做前端  用js代码
做后端  也用js代码


## nodejs支持最新的ES语法
nodejs使用的是ECMAScript语法，并且支持最新ES语法
ES5 
ES2015  == ES6 最新ES语法
ES2016
ES2017

同步、异步
同一时刻只能做一件事情。
异步 
早晨 8.00
 烧水 8:00 --------8.15
 刷牙    8:05--8:10

阻塞、非阻塞

I/O操作  输入/输出

## nodejs特点
进程、线程是操作系统中CPU基本概念。
cpu 工厂
1进程 车间
 线程 工人

单线程、异步IO
nodejs的特点单进程、单线程


学习的内容：
静态资源 gulp、grunt、webpack、npm
WEB框架 express、koa、restify
模板引擎：jade、ejs
数据库： mongodb、mysql、redis

## CommonJS规范
CommonJS规范： 模块，包，系统，二进制，控制台，编码，文件系统，套接字，单元测试等。

Nodejs基于Commonjs规范的一个实现。
## 下载安装nodejs

www.nodejs.org

测试nodejs安装是否成功

WIN+R  cmd
```
C:\Users\allck>node -v
v8.5.0
```

## Node.js的运行
1. 基于命令行
```
d:> node    //按下回车
> 10>9 
true
>           //退出交互 ctrl+c 2次
```
2. js文件

```
//1
D:\Desktop\WUIW1610-1\9-25> node demo1.js

//2
c:> node D:\Desktop\WUIW1610-1\9-25\demo1.js 
```


--------------------------------
## 模块系统
为了让Node.js的文件可以相互调用，Node.js提供了模块系统。


nodejs应用程序是通过模块组成的，模块与文件一一对应。简而言之就是一个js文件就是一个模块。

模块内容可以是JavaScript代码、json、或者编译过C/C++。

在当前模块中定义的变量或函数只属于当前这个模块，如果需要添加到全局中可以将数据添加到global上。

----------------------------------
nodejs中模块
原生模块  nodejs中自带的。
文件模块  第三方  自己写的。
三种类型：
 .js  JavaScript代码
 .node c/c++ 编译后的二进制代码
 .json  json数据

 require('a.js')  调用执行js的方法
 require('a.node') 调用执行c的方法
 require('a.json')调用解析json方法

## 模块操作
在编写每个模块时，都有require、exports、module三个预先定义好的变量可供使用。

### require 加载模块
require方法接受以下几种参数的传递：
- http、fs、path等，原生模块。
  require("http");
- ./mod或../mod，相对路径的文件模块。
- d:/pathtomodule/mod，绝对路径的文件模块。
- mod，非原生模块的文件模块。
  require("cacl")



----------------------
require("")

exports  {}导出模块
只能导出对象 {}
//b.js
var name = "1231312";
exports.n = name;

//a.js
var b = require('./b.js');
console.log(b.n)

module.exports  {}导出模块
可以导出任意的东西

//a.js
var b = require('./b.js');
b();
//b.js
module.exports = function(){
	console.log('fnfn');
}
