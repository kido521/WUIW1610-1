const  http = require('http');
var date = new Date();
var tt = date.toLocaleString();
var server =http.createServer(function (req,res) {
    res.write(tt);
    res.end();
    console.log(res);
})
server.listen(9000);

