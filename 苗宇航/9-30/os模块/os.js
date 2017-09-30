var os = require("os");

console.log(os.tmpdir());
//临时操作系统路径

console.log(os.endianness());
//用于标识CPU的字节顺序,'BE' 为大端,'LE' 为小端。

console.log(os.hostname());
//以字符串形式返回操作系统的主机名

console.log(os.type());
//系统名

console.log(os.platform());
//操作系统名

console.log(os.arch());
//CPU体系结构

console.log(os.release());
//标识操作系统版本

console.log(os.uptime());
//以秒为单位返回系统正常运行时间

console.log(os.totalmem())
//将系统内存的总数以字节为单位返回为整数

console.log(os.freemem());
//返回以字节为单位的空闲系统内存量

console.log(os.cpus())
//返回一个包含有关安装的每个CPU /核的信息的对象数组

console.log(os.networkInterfaces());
//返回网络配置信息
