var path = require('path');

var p=__filename;
console.log(p);
p.name='123';

console.log(path.parse(p));

