var path = require('path');

console.log(path.resolve("./path/join.js"));// 将参数解析为绝对路径。

console.log(path.resolve("./","./path/join.js"));