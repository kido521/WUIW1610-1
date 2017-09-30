var os = require("os");


// os.totalmem()将系统内存的总数以字节为单位返回为整数。
// var mg = os.totalmem()/(1024*1024*1024);
// console.log(mg);

//1.计算机名
 console.log('计算机名:'+os.hostname());

// 2.CPU 的字节序os.endianness()
console.log('CPU内存字节 : ' + os.endianness());

// 3.操作系统名os.type()
console.log('操作系统名称 : ' + os.type());

// 4.操作系统名os.platform()
console.log('操作系统名 : ' + os.platform());

// 5.系统内存总量os.totalmem()
console.log('系统内存总量 : ' + os.totalmem() + " bytes.");

// 6.操作系统空闲内存量os.freemem()
console.log('空闲内存 : ' + os.freemem() + " bytes.");

//7.返回操作系统 CPU 架构os.arch()
console.log('cpu架构:'+ os.arch());

//8.os.release()返回操作系统的发行版本。
console.log('发行版本:'+ os.release());

//9.os.uptime()返回操作系统运行的时间，以秒为单位。
console.log('运行时间:'+ os.uptime());

//10.os.networkInterfaces()获得网络接口列表。
console.log('接口:'+ os.networkInterfaces());

//11.os.tmpdir()返回操作系统的默认临时文件夹。

console.log('临时文件夹:'+ os.tmpdir());