var http = require("http");

var server = http.createServer(function (req, res) {
    res.setHeader("Content-type","text/plain;charset=utf-8")
    var timestamp=new Date().getTime();
    console.log(timestamp);

    var oDate = new Date(); //实例一个时间对象；
    oDate.getFullYear();   //获取系统的年；
    oDate.getMonth()+1;
    oDate.getDate(); // 获取系统日，
    oDate.getHours(); //获取系统时，
    oDate.getMinutes(); //分
    oDate.getSeconds(); //秒

    res.write(oDate.toString())


    // = = = = = = =
    var date = new Date();
    res.write(date.toLocaleString())

    res.write(date.toString())

    res.end();//结束响应
    // console.log(res);
})
    server.listen(8000,"localhost",function () {
        console.log("http://"+server.address().address+":"+server.address().port)
    })