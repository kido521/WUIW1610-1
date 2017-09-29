var url = require("url")

var ua = "http://user:pass@host.com:8080/users/user.php?userName=zhangsan&age=20&sex=nan#hasa";

console.log(url.parse(ua));