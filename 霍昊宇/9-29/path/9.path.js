var path=require('path');

var f= __filename;
console.log(f);
var p1=path.parse(f);
p1.name='123';
p1.base='123'+p1.ext;
console.log(p1);
console.log(path.format(p1));