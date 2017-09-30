var path=require('path');
// console.log(path)
// console.log(path.sep)


// var p="d:/desktop/";
// console.log(path.normalize(p))

// var p=__dirname;
// console.log(path.join(p,'2.js'))

// console.log(path.resolve(''))

// var p="../";
var p1=__filename;
// var p2=__dirname;
// var p3="huilv"
//  console.log(path.isAbsolute(p))
// console.log(path.isAbsolute(p1))
// console.log(path.relative(p3,p2));

// console.log(path.dirname(p1))


// console.log(path.basename(p1))
// console.log(path.extname(p1))
var po=path.parse(p1);
// console.log(path.parse(p1));
// po.name="123";
po.bath='123'+'js';
console.log(path.parse(po));