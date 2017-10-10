var http =require("http");
var server=http.createServer(function (req,res) {
    //req.request  请求
    //res.reponse  响应
    //设置响应头
    res.setHeader("Content")
    res.write("你好，世界");
    setTimeout(function () {
        res.write("静态服务器")
        res.end();

    },2000)

})
var

    )

})  //监听事件
