var http=require('index');
// console.log(http);//nodejs中http
//http服务基于请求/响应
var server=http.createServer(function(req,res){ //1.先创建
    //req request  请求
    // res  response  响应
    res.end('你好！')
})
server.listen(8000,function(){ //2.启动并监听8000这个端口
    // console.log("服务器正在运行...");
    console.log("服务器正在运行...,访问地址为:'http://'+server.address().address+':'+server.address().port");
    console.log(server);
    console.log(server.address());//{ address: '::', family: 'IPv6', port: 8000 }
    console.log(server.address().port);
})

