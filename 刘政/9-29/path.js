var path=require('path');
// console.dir(path);

// 属性
// 1、path.sep  获取路径分割符
console.log(path.sep);
// 2、path.normalize(P)  规范p的路径
		var p='d:/desktop/wuiw1610';
		console.log(path.normalize(p))//'d:\desktop\wuiw1610'
//
// 3、path.join(a,b)  用于连接a,b两个路径
// 		var p=__dirname;
// 		console.log(path.join(p,'../git.md'))

// 4、path.resolve(p) 返回当前工作路径的绝对路径
// 		console.log(path.resolve(__dirname,'../path/4.join.js'))//返回绝对路径

// 5、path.isAbsolute()  判断是否为绝对路径

// 6、path.relative()  用于将路径转化为相对路径

// 7、path.dirname()   返回路径中代表文件夹的部分

// 8、path.basename()    返回路径中的文件名

// 9、path.extname()     返回路径中代表后缀的部分

// 10、path.parse()      返回路径字符串的对象

// 11、path.format()     从对象中返回路径字符串(跟path.parse()相反)