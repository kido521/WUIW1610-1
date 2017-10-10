# nodejs模块
## 模块系统的作用
为了让js文件可以相互调用。

## 什么是模块
nodejs应用程序是通过模块组成，模块和文件是一一对应的关系，一个nodejs文件就是一个模块。

## 模块的作用域
一个模块一个作用域。

## 模块化解决的问题
1. 命名冲突
2. 文件间相互依赖关系

## 模块分类
- 原生模块
- 文件模块
  - .js    js代码，js引擎编译执行
  - .node  c/c++
  - .json  JSON.parse

## 模块使用
require
exports
module.exports 

module
	id:'.'
	exports:{}
	parent:[]
	children:[]
	filename:''
	loaded:false
	path []

## 模块优先级
已经缓存模块->原生模块->文件模块->文件中的模块

## 路径解析
1. 内置模块
2. node_modules

## 主模块、入口模块

# 包

## 定义模块

package.json 包配置
name:""
main:"" 入口模块路径


## 符合Commonjs规范的包
- lib
- doc
- bin
- test
- README.md
- package.json



## npm
npm包管理器 
包的发布、传播、依赖


```
npm install <>
npm uninstall <>
npm install <> -g
npm uninstall <> -g
npm show <>
npm list
npm update <>
npm update
npm search <>
npm init  
npm link <>

npm adduser 

npm publish .
npm unpublish <>@x.y.z
```
## 版本号
x.y.z

-----------------------------------
开发工具
sublimeText 文本编辑器
Emmet

提交版本
运行命令


http://idea.iteblog.com/key.php
---------------------------------
JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。

据ECMAScript的定义，满足以下条件的变量都是全局变量：
- 在最外层定义的变量
- 全局对象的属性
- 隐式定义的变量 在Node.js中不可能在最外层定义变量，因为所有用户代码都是属于当前模块的，而模块本身不是最外层上下文。

# nodejs全局对象

在浏览器端 JavaScript全局对象
window

在Nodejs 全局对象
global

global
- console   console.log
- global
- process  进程相关
- Buffer   
- clearImmediate ()
- clearInterval ()
- clearTimeout()
- setImmediate()
- setInterval()
- setTimeout()

Node处理的数据

-------------------------------
TB GB MB KB byte bit

1byte =  8bit
1kb = 1024byte
1MB = 1024kb
1GB = 1024MB
1TB = 1024GB

rss 20MB
heapUsed 4MB
heapTotal 8MB



--------------------------------
process
process.cwd() 获取当前进程的工作路径

process.chdir() 修改进程工作路径



回调函数都是异步代码
同步执行结束后再执行异步的代码

process.nextTick(callback)
一旦当前事件循环结束，调用回到函数。(效率高)

效率相对于nextTick 低一点
setTimeout(function(){
    console.log('e')
},0)

在 Node.js 事件循环的当前回合结束时后，回调函数放到下一次事件循环中调用。
setImmediate(function(){
    console.log('d')
})

## 魔术常量
__filename
__dirname

exports
require
module

a.js
(function(module,require,exports,__dirname,__filename){
	
})()

b.js
(function(module,require,exports,__dirname,__filename){
	
})()
------------------------------
## Buffer
JavaScript处理不了一些数据，因此Buffer诞生了。Buffer就是用来处理字符串处理不了的数据。

Buffer本质上就在内存上开辟的一块空间(缓冲区)，用来处理二进制的数据。

Buffer格式类似数组 2位16进制。

## 创建Buffer
Buffer.from([])
Buffer.from("",[encoding])
Buffer.alloc(size[,fill,encoding])

## 把buffer转换为字符串
buf.toString([encoding,start,end])
## 把Buffer转换为对象
buf.toJSON()

## 拼接多个Buffer
Buffer.concat([buf,buf,buf],length)

## Buffer长度
buf.length

## Buffer支持的编码
Buffer.isEncoding(encoding)

## 判断是不是Buffer
Buffer.isBuffer(data)

## 判断Buffer是否相等
buf.equals(bul2)

------------------------------
# console



------------------------------
核心模块 需要导入

typeof a
undefined number string boolean 
object function

检测变量是不是一个数组
1. Array.isArray(a)
2. a instanceof Array 
3. 看有没有数组某个方法
4. 
function isType(data,type){
	return Object.prototype.toString.call(data) ==="[object "+type+"]"
}
5. [].constructor == ""

# util