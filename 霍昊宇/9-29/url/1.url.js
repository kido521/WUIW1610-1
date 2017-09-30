// url.parse():字符串变对象；

// url.format()：对象变字符串；

const url = require('url')

var u = 'http://nodejs.cn/api/url.html#aaa'

var uobj =url.parse(u)

uobj.hash = "#bbb";

console.log(url.format(uobj));







