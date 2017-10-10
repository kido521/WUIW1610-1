var fs = require("fs");
fs.appendFile('./writeText.txt',"今天天气真好！",err=>{if(err) throw err});

