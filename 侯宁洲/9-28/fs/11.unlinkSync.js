var fs = require("fs");
try {
    fs.unlinkSync("./2.png")
}catch (err){
    if(err) throw err;
}