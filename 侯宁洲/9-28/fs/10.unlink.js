var fs = require("fs");

// var file = __dirname+"\\222.md"
var file = "./text";

fs.unlink(file,err=>{
    if(err) throw err;
})
