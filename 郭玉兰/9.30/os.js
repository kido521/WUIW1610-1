var os=require("os")
// console.log(os.cpus(os))
// console.log(os)

//1.返回操作系统的默认临时文件夹。
// console.log(os.tmpdir(os))  //C:\Users\ADMINI~1\AppData\Local\Temp

//2.返回 CPU 的字节序，可能的是 "BE" 或 "LE"。
// console.log(os.endianness(os))  //LE

//3.返回操作系统的主机名。
// console.log(os.hostname(os))  //WIN10-612290920

// 4.返回操作系统名
// console.log(os.type(os))  //Windows_NT

//5.返回操作系统名
// console.log(os.platform(os))  //win32

//6.返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。
// console.log(os.arch(os))  //x64

//7.返回操作系统的发行版本
// console.log(os.release(os))  //10.0.10586


// var mg=os.totalmem()/(1024*1024*8);
// console.log(mg)  //501.0341796875

// 8.返回一个对象数组，包含所安装的每个 CPU/内核的信息
// console.log(os.cpus(os))

//9.获得网络接口列表。
console.log(os.networkInterfaces(os))