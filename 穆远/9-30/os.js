var os = require("os");

// console.log(os);

console.log(os.tmpDir());
//获取系统创建的临时目录 C:\Users\ADMINI~1\AppData\Local\Temp

console.log(os.endianness());
//获取cpu的字节序,LE
console.log(os.type());
//获取操作系统类型 Windows_NT
console.log(os.hostname());
//获取主机名 PC201703241840
console.log(os.platform());
//获取当前系统的操作平台 win32
console.log(os.arch());
//获取cpu架构 x64
console.log(os.release());
//获取操作系统的release版本号 6.1.7601
console.log(os.uptime());
//系统从启动到方法执行共经历多长时间 46300.6822654 秒
console.log(os.loadavg());
//返回一个数据，数据元素依次为1分钟5分钟和15分钟的平均负载 [ 0, 0, 0 ]
console.log(os.totalmem());
//内存总数，单位字节 8558854144
console.log(os.freemem());
//空闲内存数，单位字节 4925333504
console.log(os.cpus());
// 返回一个数组，数组每个元素为一个cpu核心的信息  eg:{model: 'Intel(R) Core(TM) i7-3720QM CPU @ 2.60GHz',}
console.log(os.networkInterfaces());

//返回一个二维数组，每一个内层数组代表一个网络接口（物理网卡或者虚拟网卡）
