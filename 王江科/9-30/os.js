var os = require("os");

//1. 操作系统临时路径
var tmp = os.tmpdir();
console.log(tmp);

//2. 操作系统的字节序
var endian = os.endianness();
console.log(endian);

//3. 电脑名
var name = os.hostname();
console.log(name);

//4 . 操作系统
var type = os.type();
var platform = os.platform();
var arch = os.arch();
console.log(type,platform,arch);

//5 . 操作系统发行版本
var release = os.release();
console.log(release);

//6. 操作系统运行时间  单位：秒
var second = os.uptime();
console.log(second/60/60);

//7. 操作系统内存
var totalmem = os.totalmem();
console.log(totalmem/1024/1024);

//8. 操作系统闲置内存
var free = os.freemem();
console.log(free/1024/1024);

//9. CPU
var cpu = os.cpus();
console.log(cpu);

//10. 网络连接接口
var network = os.networkInterfaces();
console.log(network);