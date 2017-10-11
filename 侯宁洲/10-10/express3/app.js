var express = require("express");
var app = express();


app.use('/aaa',express.static('static'));
app.use(express.static('uploads'))




var server = app.listen(3000,'localhost',function(){
    console.log("当前项目地址是：http://%s:%s",server.address().address,server.address().port);
});
