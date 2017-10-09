var http=require("http");
http.createServer(function (req,res) {
    res.write("Hello!");
    res.write("Hello!");
    res.write("Hello!");
    res.end(); //#############该方法会通知服务器，所有响应头和响应主体都已被发送，即服务器将其视为已完成。
    // 每次响应都必须调用 response.end() 方法
    console.log(res)
}).listen(8002,'localhost',function () {
    console.log(this.address());
    console.log("http://"+this.address().address+':'+this.address().port)
})