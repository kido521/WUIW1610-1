# 回顾
1. 浏览器三个引擎
   DOM引擎
   css引擎
   js引擎
2. javascript在浏览器上的作用
3. nodejs是什么
4. 特点
5. nodejs 基于 Commonjs规范
6. 下载、安装
7. 运行
8. 模块系统
9. 为什么要模块化
10. 如何使用模块
11. 如何定义模块
-----------------------
Javascript运行在浏览器端。
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

JS引擎 解析执行js代码
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
规定了JavaScript运行在浏览器之外的一些功能模块标准。

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
<script src="a.js"></script>
<script src="b.js"></script>

## 模块系统
为了让Node.js的文件可以相互调用，Node.js提供了模块系统。


nodejs应用程序是通过模块组成的，模块与文件一一对应。简而言之就是一个js文件就是一个模块。

模块内容可以是JavaScript代码、json、或者编译过C/C++。

在当前模块中定义的变量或函数只属于当前这个模块，如果需要添加到全局中可以将数据添加到global上。

----------------------------------
nodejs中模块
模块分为两种：
- 原生模块  nodejs中自带的。
- 文件模块  第三方  自己写的。
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
javascript数据类型：
初始类型 string number boolean undefined null symbol
var a = "12313"
var b = a;
引用类型 object function array 
var arr = [];

var a = arr;
require("")

exports  {}导出模块
只能导出对象 {}
//b.js
var name = "1231312";
exports.n = name;

//a.js
var b = require('./b.js');
// b = {n:"1231312"}
console.log(b.n)



exports = module.exports = {}
导出的是 module.exports

module.exports {}导出模块
可以导出任意的东西

//a.js
var b = require('./b.js');
b();
//b.js
module.exports = function(){
	console.log('fnfn');
}

## module
parent children

require('./a.js')
require('./a.js')
require('./a.js')

## 模块加载优先级
## 模块路径解析规则
1. 内置模块
2. node_modules目录
require('m.js')
D:\Desktop\WUIW1610-1\9-26\node_modules
D:\Desktop\WUIW1610-1\node_modules
D:\Desktop\node_modules
D:\node_modules
报错 Cannot find module 'm.js'

m.js
console.log(__dirname)
---------------------------------
Nodejs程序是通过模块组成。

## 包

自定义包
/calc
  main.js //主模块/入口模块
  sum.js  //加法
  subtraction.js    //减法
  multiplication.js //乘法
  division.js       //除法


入口模块
入口模块的名字可以定义为index.js


## Package.json
name
main  入口文件的位置，名字
scripts
dependencies    生产环境依赖
devDependencies 开发环境依赖

## NPM使用
Node Package Manager 简称NPM，是Node.js的包管理器。

用于Node.js包的发布、传播、依赖控制。

### npm常见的使用场景
- 允许用户从NPM服务器下载别人编写的第三方包到本地使用
- 允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用
- 允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用

在nodejs安装包中已经集成npm，nodejs安装结束后npm安装完成。我们可以通过"npm -v"命令来检测是否安装成功。命令如下：
```
$ npm -v 
```
## npm命令
### 安装包
获取包
1. 通过npm官网 搜索需要的包
2. 通过百度查找我们需要的包

获得包的名称后，安装包

```
npm install <包名>
npm i <包名>
```
安装指定版本的包
```
npm install <包名>@0.0.0
```
同时安装多个包
```
npm install 包名1 包名2 包名3 ... 
```

## 全局安装VS本地安装
列出本地安装哪些包
```
npm ls
```

## 版本号

使用NPM下载和发布代码时都会接触到版本号。NPM使用语义版本号来管理代码，这里简单介绍一下。

语义版本号分为X.Y.Z三位，分别代表主版本号、次版本号和补丁版本号。当代码变更时，版本号按以下原则更新。

- 如果只是修复bug，需要更新Z位。
- 如果是新增了功能，但是向下兼容，需要更新Y位。
- 如果有大变动，向下不兼容，需要更新X位。


## npm命令
```
npm install 包名   安装指定包
npm uninstall 包名 卸载指定包
npm install 包名 -g
npm uninstall 包名 -g
npm ls -g      列出全局包列表
npm ls         列出本地包列表
npm show 包名    显示包详情
npm update 包名  升级指定包
npm update       升级本地所有包
npm search 包名  搜索指定包
npm init  使用向导生成package.json

npm adduser       #添加用户  在npm官网注册的账号
Username: allcky       #用户名
Password:              #密码
Email: (this IS public) allcky@qq.com

npm publish .          # 发布指定的包
npm unpublish <包名>@<版本号> #可以撤销发布自己发布过的某个版本包。
```
## 全局安装
### window 
```
npm install 包名 -g
```
### mac
```
sudo npm install 包名 -g
```
在window上查找npm包的安装目录
C:\Users\allck\AppData\Roaming\npm
在mac上想查找npm包的安装目录
/usr/local/bin/lib/node_modules

