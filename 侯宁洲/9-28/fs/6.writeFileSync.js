var fs = require("fs");
try {
    fs.writeFileSync('./writeText.txt',"hello world");
    fs.writeFileSync('./writeText.txt',"abc");
}catch (err){
    if(err) throw err;
}