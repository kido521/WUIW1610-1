/**
 * Created by Administrator on 2017/9/29 0029.
 */
var url =  require ('url');
var u ="http://  www.baidu.com:80/php/index.php?search=123456#hash "
var part = url.parse(u);
console.log(part);