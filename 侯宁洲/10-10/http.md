# event
# http
### web基础
web服务器：就可以安装了可以提供http服务软件的电脑。

Web服务软件：
Apache
IIS .net
nginx 
....


## nodejs http模块
```
var http = require("http");
```

```
var server = http.createServer(function(req,res){
	//req  请求 客户端给服务器请求
	req.url 获取请求地址
	request.headers 请求头信息
	request.method 请求方式get post put delete

	//res  响应 服务器给客户端响应
	res.writeHeader(statusCode,{})
	res.writeHeader(200,{'Content-type':"text/css"})

	
	res.setHeader(name,value)
	res.setHeader('Content-type','text/html')
	res.setHeader('Content-type','application/octet-stream')
	res.setHeader('Content-type','text/html;charset=utf-8')


	res.statusCode  设置状态码
	res.statusCode = 404;
	res.statusCode = 200;

	res.write()  给客户端发送数据 
	res.end()    终止响应
})
server.listen(8000)

server.listen(port,host,callback)
```

服务器 --------------> 客户端

客户端给服务器发送数据
1. 通过浏览器   get
2. 表单  get post
// path  querystring
   req.url   
   http://localhost:8080/search?s=张三
	
	var p = path.parse(req.url)
	http://localhost:8080/search?s=张三 => {}
   if(p.pathname == /search){
		var queryObj = qs.parse(p.query);
   }
3. ajax  get post

[1,2,3].toString()  => "1,2,3"

JSON.stringify([1,2,3]) => "[1,2,3]"
JSON.parse("[1,2,3]") => [1,2,3]


<form action="" method="post"></form>

## ajax post 提交数据


post发给 node http模块数据，通过以下方式接收

req.on("data",function(data){
	
})
req.on("end",function(){
	
})


image/gif ==>.gif
mime.gettype('image/gif') ==> .gif

upload/2017-10-10/ 



var formidable = require("formidable");
if(u.pathname=="/uploads"){
	var form = new formidable.IncomingForm();
	form.parse(req,function(err,fields,files){
		console.log(files)
		// 1. 判断 upload 文件夹是否存在
		// 2. new Date() => 2017-10-10
		// 3. 判断 upload/2017-10-10 
		// 4. filename = d.getTime()+Math.floor(Math.random()*1000)+path.extname(files.avatar.name)
		// 5. 读取临时目录中图片 并写入到 upload/2017-10-10/filename
		// 6. 将上传文件的路径返回给前台
	})
}