var url = require("url");
var quer = require("querystring");
var u = "https://github.com/allcky/wuiw1610-1";
// console.log(url.parse(u));
// parse这个方法可以将一个url的字符串解析并返回一个url的对象
var u2 = "https://www.baidu.com/s?wd=queryString%20url%20node&rsv_spt=1&rsv_iqid=0xd4b541c20000c390&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=0&oq=queryString%2520node";

var u3 = "https://user:pass@sub.host.com:8080/path?query=string&color=red&way=go#hash";

var Url1 =  {
    protocol: 'https:',
        slashes: true,
        auth: null,
        host: 'github.com',
        port: null,
        hostname: 'github.com',
        hash: null,
        search: null,
        query: null,
        pathname: '/allcky/wuiw1610-1',
        path: '/allcky/wuiw1610-1',
        href: 'https://github.com/allcky/wuiw1610-1'
}
//
// var mn = url.parse(u2);
// // console.log(mn);
// var qu = quer.parse(mn.query);
//     // qu = null;
// // console.log(qu);
// //query下面太多了，直接null吧;
//
// // console.log(url.format(Url1));//将对象转换成url
// var a = url.resolve(u,"four");
// // console.log(a);
// // https://github.com/allcky/wuiw1610-1
// //     https://github.com/allcky/four
// var b = url.resolve(u,"/four");
// // console.log(b);

var uu = url.parse(u3);
console.log(uu)

var uu1 = uu.query;

var uu2 = quer.parse(uu1);
uu2.query = "home";

uu.query=quer.stringify(uu2);
uu.search='?'+uu.query;
var xinUrl=url.format(uu);
console.log(xinUrl)


// console.log(uu1);

// console.log(quer.parse(u));//讲一个字符串反序列化成一个对象;
// console.log(quer.stringify(Url1));
//讲一个对象反序列化成一个字符串

/////////////////一对
// console.log(quer.escape(u));
//可将字符串进行编码
// console.log(quer.unescape(quer.escape(u)));
//可将含有百分号的字符串进行转码；
//////////////////

// quer.stringify序列化; 人话:对象转成字符串
//
// quer.parse反序列化;  人话:字符串转对象
//
// quer.escape编码;      人话:加些莫名其妙的百分号;
//
// quer.unescape解码;     人话:把百分号干掉改成人类能用的格式


