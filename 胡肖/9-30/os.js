var os=require('os');

var mg =os.totalmem()/(1000*1000*1000);

var tm=os.tmpdir();

var en=os.endianness();

var hn=os.hostname();

var type=os.type();

var pl=os.platform();

var arch=os.arch();

var re=os.release();

var up=os.uptime();

var net=os.networkInterfaces();

var cpu=os.cpus();

var fr=os.freemem()/(1000*1000*1000);

console.log(fr);