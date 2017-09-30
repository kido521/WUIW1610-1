var url = require('url');

// url.format
// 将一个解析后的URL对象、转成、一个格式化的URL字符串。


// 接收参数：
// urlObj 表示 URL对象，可包含以下属性：（可对照例子）
// href                      完整路径
// protocolis                协议（如http://)
// auth
// hostname                  主机名
// port                      端口
// host                      主机（主机名 + 端口）
// pathname                  ‘/' 可以理解成目录
// query                     参数列表
// search                    查询条件（就是加上 “?”的参数列表）
// hash                      哈希值


var a = url.format({
    protocol : 'http' ,
    auth : null ,
    host : 'example.com:8080' ,
    port : '8080' ,
    hostname : 'example.com' ,
    hash : null ,
    search : '?a=index&t=article&m=default',
    query : 'a=index&t=article&m=default',
    pathname : '/one',
    path : '/one?a=index&t=article&m=default',
    href : 'http://example.com:8080/one?a=index&t=article&m=default'
});
console.log(a);


// http://example.com:8080/one?a=index&t=article&m=default