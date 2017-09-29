var path = require('path');
// console.log(path);

// sep
// console.log(path.sep)


// path.normalize()
// var p = "/Users/jingyang/Desktop/nodejs/929/path/../";
// console.log(path.normalize(p));


// jion
// var p = __dirname;
// console.log(path.join(p,"../a.txt"));


// reslove
// console.log(path.resolve(__dirname,"a.json"));
// console.log(path.resolve("./a.json"));

// path.isAbsolute()
// var p = "../a.txt";
// var p2 = __filename;
// path.isAbsolute(p2);

// path.relative()
// var pa = __dirname;
// var p = "../a.txt";
// console.log(path.relative(pa,"../a.json"));

// base
// var a  = __filename;
// var s = a.lastIndexOf(path.sep);
// console.log(a.slice(s+1));
// console.log(path.basename(__filename));

// extname
// console.log(path.extname(path.basename(__filename)));

// parse
// var p = __filename;
// console.log(path.parse(p));
// var p1=path.parse(p);
// p1.name='123';
// p1.base="123"+p1.ext;
// console.log(path.format(p1));
// console.log(path.parse(p))
