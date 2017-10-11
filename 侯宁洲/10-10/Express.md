thinkphp MVC框架  == 做二次开发

 html
<-----后台  tmplate + php + mysql
--------------------------------
# Express 
Express是一个web开发框架！

       html
前台 <-----后台  tmplate + nodejs + mysql

       json      路由 
前台 <-----后台 <----  nodejs + mysql


## 安装express
```
npm install express
```

package.json
```
npm install express --save
```
生产环境依赖列表  
dependencies:{
	"express": "^4.16.2"
}


```
npm install express --save-dev
```
开发环境依赖列表
devDependencies:{
	"express": "^4.16.2"
}


## 使用Express
app.js
```
var express = require("express");
var app = express();

app.get()
app.post()
app.get("/",function(req,res){
	res.send("hello world!")
})

app.listen(3000)
```

### 路由
路由：通过不同的URL访问指定的内容。

每一个路由都可以有一个或者多个处理器函数，当匹配到路由时，这个/些函数将被执行。

路由的定义由如下结构组成：
app.METHOD(PATH, HANDLER)。

有语义： get 查 / post 改 / put 增 / delete 删
get  post  put delete

METHOD 请求方式  get  post  put delete 
PATH  请求URL  自定义的
HANDLER 回调函数  callback

调试接口工具 postman
通过google应用商店 安装


### 利用 Express 托管静态文件
static   phpcms   phpmvc
static/
/css
/js
/images

http://localhost/css/index.css



