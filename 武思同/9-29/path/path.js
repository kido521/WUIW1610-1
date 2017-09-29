var path=require('path');
var p=__filename;
var a="9-29";
var b="path";
console.log(path.normalize(p));
console.log(path.join(a,b));
console.log(path.resolve(a,b));
console.log(path.isAbsolute(p));
console.log(path.relative(a,b));
console.log(path.dirname(p));
console.log(path.basename(p));
console.log(path.extname(p));
console.log(path.parse(p));

var u={ root: 'C:\\',
    dir: 'C:\\Users\\Administrator\\Desktop\\wuiw1610-1\\武思同\\9-29\\path',
    base: 'a.js',
    ext: '.js',
    name: 'a' };

console.log(path.format(u));