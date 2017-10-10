const fs = require('fs');

try{
    var data = fs.readFileSync('./test2.txt');
    console.log(data.toString());
}catch(err){
    throw err;
    // console.error(err)
}


console.log("END")