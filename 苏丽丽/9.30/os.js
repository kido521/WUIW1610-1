//os.tmpdir()方法返回一个字符串, 表明操作系统的 默认临时文件目录.
//os.hostname()方法以字符串的形式返回操作系统的主机名.
//os.type()方法返回一个字符串,表明操作系统的名字,
//os.platform() 方法返回一个字符串, 指定Node.js编译时的操作系统平台
//os.arch()方法返回一个字符串
//os.uptime() 方法在几秒内返回操作系统的上线时间.
//os.loadavg()方法返回一个数组,包含1, 5, 15分钟平均负载.
// os.totalmem()//内存
//os.freemem() 方法以整数的形式回空闲系统内存 的字节数.
// os.cpus();方法返回一个对象数组, 包含安装的每个CPU/CPU核的信息.
//os.networkInterfaces()方法返回一个对象,包含只有被赋予网络地址的网络接口.
//os.endianness()方法返回一个字符串,'LE' 小端模式
//os.homedir() 方法以字符串的形式返回当前用户的home目录.
//os.release()方法返回一个字符串, 指定操作系统的发行版.

// 测试

var os = require("os");
// var mg=os.totalmem()/(1024*1024*8);
// var mg=os.platform();
// var mg=os.cpus();
// var mg=os.endianness();//LE
// var mg= os.freemem();//1127878656
// var mg=os.homedir();//C:\Users\ki
// var mg=os.hostname();
// var mg= os.loadavg();//[ 0, 0, 0 ]
var mg= os.networkInterfaces();
// var mg=os.platform();
// var mg=os.release();//发行版本
// var mg=os.type();
// var mg=os.uptime();
// var mg=os.tmpdir();
console.log(mg);
