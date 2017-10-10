const os = require("os");
// path.sep

// 1.os.tmpdir();返回一个字符串，指定临时文件的操作系统的默认目录。
var td = os.tmpdir();
console.log(td);

// 2.os.endianness();
var en = os.endianness();
console.log(en);

// 3.os.hostname();
var hn = os.hostname();
console.log(hn)

// 4.os.type();返回操作系统名称的字符串
var tp = os.type();
console.log(tp);

// 5.os.platform();
var pf = os.platform();
console.log(pf);

// 6.os.arch();  //
var ac = os.arch();
console.log(ac);

// 7.os.uptime();  //返回系统正常运行多长时间
var ut = os.uptime();
console.log(ut);

// os.loadavg(); //
var ld = os.loadavg();
console.log(ld);

// 9.os.totalmem();  //返回系统内存总量，单位为字节
var mg = os.totalmem()/(1024*1024*1024);
console.log(mg);

// 10.os.freemem();  //返回操作系统空闲内存量
var fm = os.freemem();
console.log(fm);

// 11.os.cpus();  //返回一个对象数组
var cp = os.cpus();
console.log(cp);

//12.os.networkInterfaces();
var nw = os.networkInterfaces(); //返回网络路径 对象
console.log(nw);