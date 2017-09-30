const crypto = require('crypto');

var pass="diamond";
var sha1=crypto.createHash("sha1");
sha1.update(pass);
console.log(sha1.digest('hex'));
//f872caad177d67bbe18c119d0505f2d3caa02af3

