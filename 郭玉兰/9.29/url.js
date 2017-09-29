// var url=require("url");
// console.log(url)

//1.url.parse()拆解url  得到url的具体内容 把url转化成字符串
// var u="https://zhidao.baidu.com/question/1445807405096192580.html";
// var result=url.parse(u);
// console.log(result)


//对象格式话为字符串 把字符串转化成url url.format()
// var urlObj={
//     protocol: 'https:',
//     slashes: true,
//     host: 'zhidao.baidu.com',
//     hostname: 'zhidao.baidu.com',
//     pathname: '/question/1445807405096192580.html',
//     path: '/question/1445807405096192580.html',
// }
// var urlObj=url.parse(u);
// console.log(url.format(urlObj));

//url路径处理  url.resolve()
// var aa=url.resolve('/mi/kol',"99")
// var bb=url.resolve('http://hhh.com',"dir")
// console.log(aa);//mi/99
// console.log(bb);//http://hhh.com/dir
// **************************************************************************
//querystring模块 处理字符串  pase  stringify
var qs = require('querystring');
var url = require('url');
// console.log(qs);
var u = "http://baidu.com/admin/asd?name=lll&age=12";//url路径
var urlobj = url.parse(u);//转换成对象
var query = urlobj.query;//把query拿出来name=lll&age=12
var a = qs.parse(query);//把query转换成对象
a.name = "lanlan";//改变
var str = qs.stringify(a);//对象转换成字符串
urlobj.search = "?"+str;
urlobj.query =str;
console.log(url.format(urlobj));//http://baidu.com/admin/asd?name=lanlan&age=12
