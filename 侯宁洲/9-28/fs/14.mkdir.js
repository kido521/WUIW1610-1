var fs = require('fs');

if(!fs.existsSync('test')){
    fs.mkdir('test',err=>{
        if(err) throw err;
    })
}