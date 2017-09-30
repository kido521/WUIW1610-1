var url = require("url");

var Url = {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hasa',
  search: '?userName=zhangsan&age=20&sex=nan%20',
  query: 'userName=zhangsan&age=20&sex=nan%20',
  pathname: '/users/user.php',
  path: '/users/user.php?userName=zhangsan&age=20&sex=nan%20',
  href: 'http://user:pass@host.com:8080/users/user.php?userName=zhangsan&age=20&sex=nan#hasa'
}

console.log(url.format(Url))
//字符串==>url OBJ 
//	 parse 

//url OBJ ===>url字符串
//	format