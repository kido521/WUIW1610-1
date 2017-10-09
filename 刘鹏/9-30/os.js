var os= require("os");

console.log(os.tmpdir());
// 返回操作系统的默认临时文件夹。

console.log(os.endianness());
// 返回 CPU 的字节序，可能的是 "BE" 或 "LE"。

console.log(os.hostname())
// 返回操作系统的主机名。

console.log(os.type())
// 返回操作系统名

console.log(os.arch())
// 返回操作系统 CPU 架构，可能的值有 "x64"、"arm" 和 "ia32"。

console.log(os.release())
// 返回操作系统的发行版本。
console.log(os.uptime())
// 返回操作系统运行的时间，以秒为单位。

console.log(os.loadavg())
// 返回一个包含 1、5、15 分钟平均负载的数组。

console.log(os.freemem())
// 返回操作系统空闲内存量，单位是字节。

console.log(os.cpus())
// 返回一个对象数组，包含所安装的每个 CPU/内核的信息

console.log(os.networkInterfaces())
// 获得网络接口列表。