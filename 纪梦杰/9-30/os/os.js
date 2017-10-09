var os=require("os");

// 返回操作系统的默认临时文件夹
console.log(os.tmpdir());

// 返回 CPU 的字节序
console.log(os.endianness());

// 返回操作系统的主机名
console.log(os.hostname());

// 返回操作系统名
console.log(os.type());

// 返回操作系统名
console.log(os.platform());

// 返回系统内存总量
console.log(os.totalmem());

// 返回操作系统空闲内存量
console.log(os.freemem());

// 返回一个对象数组，包含所安装的每个 CPU/内核的信息：型号、速度（单位 MHz）、时间
console.log(os.cpus());

// 获得网络接口列表
console.log(os.networkInterfaces());

// 返回操作系统 CPU 架构
console.log(os.arch());

// 返回操作系统的发行版本
console.log(os.release());

// 返回操作系统运行的时间
console.log(os.uptime());

// 返回一个包含 1、5、15 分钟平均负载的数组
console.log(os.loadavg());


