const  http = require('http');
var server =http.createServer(function (req,res) {
     // var date = new Date();
     // var tt = date.toLocaleString();
     // var buf=Buffer.from('weajdslkdjkl');
     // res.write(buf);
     // res.write(tt);
     // res.end();

    res.setHeader("Content-type","text/plan;charset=utf-8");
    res.write("你好！！！");
    setTimeout(function () {
          res.write("不好？？？");
          res.end();
        },2000)
    });
server.listen(9000);
