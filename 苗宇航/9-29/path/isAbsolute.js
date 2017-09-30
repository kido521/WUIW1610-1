var path = require('path')
var p = './2.path.js';
var p1 = __dirname;
console.log(path.isAbsolute(p))
console.log(path.isAbsolute(p1))