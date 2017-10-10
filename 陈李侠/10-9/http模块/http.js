var http = require("http");
// console.log(http);
/*
*http服务基于请求/响应模型
*/
// var server = http.createServer(function(req,res){
//     //req request   请求
//     //res response  响应
//     res.write("hello");
//     res.end();
//     console.log("服务器正在请求...");
// });
// server.listen(8000,'localhost',function(){
//     console.log('http://'+server.address().address+":"+server.address().port);
// });

// 输出当前时间
var server = http.createServer(function(req,res){
    //req request   请求
    //res response  响应
    var date = new Date();
    res.write(date.toLocaleTimeString());
    res.end();                      //必须有
    console.log(date);
});
server.listen(8000,'localhost',function(){
    console.log('http://'+server.address().address+":"+server.address().port);
});