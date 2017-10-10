var http = require("http");

var server = http.createServer(function (req, res) {
    // res.writeHeader(200,{'Content-type':'text/html'})//设置编码
    // res.writeHeader(200,{'Content-type':'text/plain'})//设置编码  plain 不识别标签
    res.setHeader("Content-type","text/html;charset=utf-8")//设置编码

    res.write("<h1>呵呵</h1>");
    res.end();
})

server.listen(8000,"localhost",function () {
    console.log("http://"+server.address().address+":"+server.address().port)
})