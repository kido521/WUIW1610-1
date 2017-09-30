var path = require("path");
// console.log(path);
// console.log(path.sep);//获取分隔符

//规范路径(normalize)
// var p = "d:/desktop/wui1704/";
// var p1 = "d:/desktop/wui1704/../";
// console.log(path.normalize(p1));

//连接两个路径(join(连接的目录p,"../"))

// var p = __dirname;
// console.log(path.join(p,"../path.md"))

//path.resolve([...paths])解析为绝对路

//console.log(path.resolve(__dirname,"../9.29/path.md"));


//path.isAbsolute(path);判断是不是绝对路径

// var p = "../path.md";
// var p2 = __filename;
// console.log(path.isAbsolute(p2));


//path.relative(from, to)转换为相对路径

// var p = "../path.md";
// var p2 = __dirname;
// console.log(path.relative(p2,p));


// path.dirname(path);返回文件夹部分

var p2 = __filename;
console.log(p2);
console.log(path.dirname(p2));

//basename

// var p2 = __filename;
// var s= p2.lastIndexOf(path.sep);
// console.log(p2.slice(s+1));
// console.log(path.basename(p2));


//后缀名extname();

// var p2 = __filename;
// console.log(path.extname(p2));


// var p2 = __filename;
// var po = path.parse(p2);
// // po.name = "1234";
// po.base = "1234"+po.ext;
// // console.log(po);
// console.log(path.format(po))

