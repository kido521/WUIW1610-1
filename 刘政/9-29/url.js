var url=require('url');
// console.log(url);

// url各部分使用说明
// 协议   域名   主机名 端口号     路径       查询字符串   哈希值
// https://www.baidu.com: 80 / php/index.php? query=string #hash
// 

属性
1、url.parse() 把url字符串转化为对象
	// console.log(url.parse('https://www.baidu.com: 80 / php/index.php? query=string#hash'))

2、url.format()  把对象转化为url字符串

	更改url上某一个 值
	1> 先把字符串转化为对象
	// console.log(url.parse('https://www.baidu.com: 80 / php/index.php? query=string#hash'))
	2> 更改对象上相应的值
	3> 再把对象转化为url url.gormat() 

3、url.resolve(from,to)  url处理路径或锚点
	url.resolve("/one/two/three","four") //"/one/two/four"
	url.resolve("http://one/teo",'four')  //"http://one/four"
