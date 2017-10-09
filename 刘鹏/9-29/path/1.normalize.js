var path = require('path');

var p1 = "C:/Users/lenovo/Desktop/test/node/path";
console.log(path.normalize(p1));

var p2 = "C:/Users/lenovo/Desktop/test/../path";
console.log(path.normalize(p2));