var http = require("http");

var server = http.createServer(function (req, res) {
    res.setHeader("Content-type","text/plain;charset=utf-8")//设置编码
    res.write("呵呵~");
    res.write("呵呵！");
    res.write("呵呵&");
    setTimeout(function () {
        res.write("某某某某某");
        res.end();//结束响应
    },2000)

    // console.log(res);
})
server.listen(8000,"localhost",function () {
    console.log("http://"+server.address().address+":"+server.address().port)
})