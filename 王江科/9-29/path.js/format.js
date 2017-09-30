var path = require("path");
var p = {
            root: "D:/",
            dir: "D:/前端/9月份/path",
            base: "join.js",
            ext: ".js",
            name: "join"
        }
console.log(path.format(p));
// console.log(path.parse(p).name);