const url=require('url');
var u = "http://localhost/mvc/index.php?m=admin&c=index&a=init";
console.log(url.parse(u));
