var path = require('path');
var p = "C:/Users/lenovo/Desktop/test/node/path";

console.log(path.normalize(p));
// C:\Users\lenovo\Desktop\test\node\path  规范化路径

var p1 = "C:/Users/lenovo/Desktop/test/../path";
console.log(path.normalize(p1));
// C:\Users\lenovo\Desktop\path