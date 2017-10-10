var url=require('url');

var urlObj={
    protocol:'http',
    slashes:true,
    hostname:'baidu.com',
    port:80,
    pathname:'index',
    hash:'#home',
    search:'?search=aiqiyi',
    path:'/nodejs?search=aiqiyi'
}
// var  u="http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
// var urlObj=url.parse(u);
// urlObj.hash="#home";
console.log(url.format(urlObj));

