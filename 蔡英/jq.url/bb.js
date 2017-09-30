// var url=require('url');
// var u='http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two';
// console.log(url);
// console.log(url.parse(u));
// Url {
//     protocol: 'http:',
//         slashes: true,
//         auth: null,
//         host: 'calc.gongjuji.net',
//         port: null,
//         hostname: 'calc.gongjuji.net',
//         hash: '#one#two',
//         search: '?name=zhangsan&age=18',
//         query: 'name=zhangsan&age=18',
//         pathname: '/byte/',
//         path: '/byte/?name=zhangsan&age=18',
//         href: 'http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two' }
// console.log(url.parse(u).port);
// url.parse(u).port='8080';
// console.log(url.parse(u));
// var urlobj={
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'calc.gongjuji.net',
//     port: null,
//     hostname: 'calc.gongjuji.net',
//     hash: '#one#two',
//     search: '?name=zhangsan&age=18',
//     query: 'name=zhangsan&age=18',
//     pathname: '/byte/',
//     path: '/byte/?name=zhangsan&age=18',
//     href: 'http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two' }

// console.log(url.format(urlobj));'//http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two'

// var object=url.parse(str);
// console.log(url.format(urlobj));
// console.log(url.parse(url.format(urlobj)));
var qs=require('querystring');
var url=require('url');
var u='http://calc.gongjuji.net/byte/?name=zhangsan&age=18#one#two';
var uobj=url.parse(u);
console.log(uobj);
var query=url.parse(u).query;
// console.log(query);     name=zhangsan&age=18
var jque=url.parse(u).search;

// console.log(jque);  ?name=zhangsan&age=18
var qobj=qs.parse(query);
console.log(qobj);
qobj.baz='hello';
var str=qs.stringify(qobj);
console.log(str);
uobj.query=str;
uobj.search='?'+str;
console.log(uobj);


