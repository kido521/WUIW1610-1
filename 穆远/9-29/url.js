var url = require("url");
var u = "https://github.com/allcky/wuiw1610-1";
// console.log(url.parse(u));
// parse这个方法可以将一个url的字符串解析并返回一个url的对象
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

// console.log(url.format(Url1));//将对象转换成url
var a = url.resolve(u,"four");
// console.log(a);
// https://github.com/allcky/wuiw1610-1
//     https://github.com/allcky/four
var b = url.resolve(u,"/four");
// console.log(b);

var quer = require("querystring");
// console.log(quer);

// console.log(quer.parse(u));//讲一个字符串反序列化成一个对象;
// console.log(quer.stringify(Url1));
//讲一个对象反序列化成一个字符串

/////////////////一对
console.log(quer.escape(u));
//可将字符串进行编码
console.log(quer.unescape(quer.escape(u)));
//可将含有百分号的字符串进行转码；
//////////////////

// quer.stringify序列化; 人话:字符串转成对象
//
// quer.parse反序列化;  人话:对象转字符串
//
// quer.escape编码;      人话:加些莫名其妙的百分号;
//
// quer.unescape解码;     人话:把百分号干掉改成人类能用的格式


