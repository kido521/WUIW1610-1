var path=require('path');

var f= __filename;
console.log(f);
var po=path.parse(f);
po.name='123';
po.base='123'+po.ext;
console.log(po);
console.log(path.format(po));