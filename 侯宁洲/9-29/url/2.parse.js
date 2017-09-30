const url = require("url");
var u = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";

var result = url.parse(u);
console.log(result)