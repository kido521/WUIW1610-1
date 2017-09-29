var path =require('path');

// 获取路径分割符
// console.log(path.sep);

//初始化路径 规范路径
// var p ="d:/desktop/phpkecheng/../"
// console.log(path.normalize(p))

//连接两个路径  path.join
// var p1=__dirname;
// console.log(path.join(p1,'../a.js'));

//将其解析为绝对路径  path .resolve
// console.log(path .resolve(__dirname,'../path/path1.js'));
// console.log(path .resolve('./','../path/path1.js'))
// console.log(path .resolve('../path/path1.js'))


//判断是否为绝对路径  path.isAbsolute(path)
// var p="../fs.name"
// var p1=__filename
// console.log(path.isAbsolute(p))
// console.log(path.isAbsolute(p1))

//转化为相对路径 path.relative(
// var p1=__dirname;
// var p1="\\desktop\\phpkecheng\\"
// var p2="../path.md";
// console.log(path.relative(p1,'../a.js'));

//path.dirname
// var p=__filename;
// console.log(path.dirname(p))

//返回文件名
// var p=__filename;
// console.log(p);
// console.log(p.lastIndexOf(path.sep))
// console.log(path.basename(p))

//当前文件的后缀名
    var f= __filename;

// console.log(path.extname(f))

//返回路径字符串对象
// console.log(path.parse(f))

//从对象返回路径字符串
var po = path.parse(f);
po.name="123";
po.base="123"+po.ext
console.log(path.format(po));






