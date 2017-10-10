var os = require('os');
// 1.os.tmpdir()       返回操作系统的默认临时文件夹。
// console.log(os.tmpdir());       //C:\Users\charlene\AppData\Local\Temp

// 2.os.endianness()   返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
// console.log(os.endianness());       //LE

// 3.os.hostname()     返回操作系统的主机名。
// console.log(os.hostname());       //charlene-chen

// 4.os.type()         返回操作系统名
// console.log(os.type());       //Windows_NT

// 5.os.platform()     返回操作系统名
// console.log(os.platform());       //win32

// 6.os.arch()         返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
//console.log(os.arch());       //x64

// 7.os.release()      返回操作系统的发行版本。
// console.log(os.release());       //6.3.9600

// 8.os.uptime()       电脑的运行时间,以秒为单位
// console.log(os.uptime());       //351390.6253849

// 9.os.loadavg()      返回一个包含 1、5、15 分钟平均负载的数组。
// console.log(os.loadavg());       //[ 0, 0, 0 ]

// 10.os.totalmem()    返回系统内存总量，单位为字节。
// console.log(os.totalmem());       //4221722624

// 11.os.freemem()        返回操作系统空闲内存量，单位是字节。
// console.log(os.freemem());       //1850093568

// 12.os.cpus()        返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间（一个包含 user、nice、sys、idle 和 irq 所使用 CPU/内核毫秒数的对象）。
// console.log(os.cpus());

// 13.os.networkInterfaces()   获得网络接口列表。
// console.log(os.networkInterfaces());