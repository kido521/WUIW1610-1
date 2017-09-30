var cry = require("crypto");

var pass = "plmqaz0";
var hmac = cry.createHmac('sha1','123');
hmac.update(pass);
console.log(hmac.digest('hex'));//digest只能运行一次


var hmac1 = cry.createHmac('sha1','456');
hmac1.update(pass);
console.log(hmac1.digest('hex'));//digest只能运行一次