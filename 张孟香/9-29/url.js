const url=require('url');
const qs=require('querystring');
var u='https://github.com/allcky/wuiw1610-1?sear=nian&zi=font';

//console.log(url.resolve('http://aa/','one'));
//console.log(url.resolve('http://aa/two','one'));
//console.log(url.resolve('http://aa/three','/one'));

//var v={
//    foo: 'bar',
//    abc: ['xyz', '123']
//}
//var uu='sear=nian&zi=font';
//console.log(qs.parse(uu))
//console.log(qs.stringify(v,';',':'))


//修改路径
var obj_url=url.parse(u);
var quer=obj_url.query;     //取出'?'之后的信息
var qs_search=qs.parse(quer);   //转换为对象
qs_search.sear='baidu';
var xinSearch='?'+qs.stringify(qs_search);      //修改信息并连接
obj_url.search=xinSearch;
var xinUrl=url.format(obj_url); //转换成url格式
console.log(xinUrl)

