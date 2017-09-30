//转换绝对路径
var path = require("path");
console.log(path.resolve(__dirname,"../path/join.js"));
console.log(path.resolve("./","../path/join.js"));