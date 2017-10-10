var http = require("http");
var server = http.createServer(function(req,res){
	if(req.url === "/favicon.ico"){
		res.end();
		return;
	}