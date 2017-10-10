var os = require("os");

//1.获取操作系统中默认用于存放临时文件的目录
// console.log(os.tmpdir());
// C:\Users\silence\AppData\Local\Temp

//2.获取CPU字节序,可能返回的值有"BE"、"LE";
// console.log(os.endianness());
// LE

//3.获取计算机名
// console.log(os.hostname());
// silence

//4.获取操作系统类型
// console.log(os.type());
// Windows_NT

//5.获取操作系统平台
// console.log(os.platform());
// win32

//6.用来获取CPU架构
// console.log(os.arch());
// x64

//7.用于获得操作系统版本号
// console.log(os.release());
// 10.0.14393

//8.用来获取系统当前运行时间(单位为秒)
// console.log(os.uptime());
// 140550.3411455

//9.获取系统空闲的内存量
// console.log(os.freemem());
// 894832640

//10.获取存放网络接口
// console.log(os.networkInterfaces());
// { WLAN: 
//    [ { address: 'fe80::c869:ee9:acf0:173d',
//        netmask: 'ffff:ffff:ffff:ffff::',
//        family: 'IPv6',
//        mac: '7a:4d:34:5d:98:a4',
//        scopeid: 15,
//        internal: false,
//        cidr: 'fe80::c869:ee9:acf0:173d/64' },
//      { address: '172.20.10.4',
//        netmask: '255.255.255.240',
//        family: 'IPv4',
//        mac: '7a:4d:34:5d:98:a4',
//        internal: false,
//        cidr: '172.20.10.4/28' } ],
//   'Loopback Pseudo-Interface 1': 
//    [ { address: '::1',
//        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//        family: 'IPv6',
//        mac: '00:00:00:00:00:00',
//        scopeid: 0,
//        internal: true,
//        cidr: '::1/128' },
//      { address: '127.0.0.1',
//        netmask: '255.0.0.0',
//        family: 'IPv4',
//        mac: '00:00:00:00:00:00',
//        internal: true,
//        cidr: '127.0.0.1/8' } ],
//   '本地连接* 4': 
//    [ { address: '2001:0:9d38:6ab8:1429:2b05:8e37:9529',
//        netmask: 'ffff:ffff:ffff:ffff::',
//        family: 'IPv6',
//        mac: '00:00:00:00:00:00',
//        scopeid: 0,
//        internal: false,
//        cidr: '2001:0:9d38:6ab8:1429:2b05:8e37:9529/64' },
//      { address: 'fe80::1429:2b05:8e37:9529',
//        netmask: 'ffff:ffff:ffff:ffff::',
//        family: 'IPv6',
//        mac: '00:00:00:00:00:00',
//        scopeid: 16,
//        internal: false,
//        cidr: 'fe80::1429:2b05:8e37:9529/64' } ] }

//11.获取存放所有CPU内核的各种信息
// console.log(os.cpus());
// [ { model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
//     speed: 2712,
//     times: 
//      { user: 8975078,
//        nice: 0,
//        sys: 10421265,
//        idle: 62726375,
//        irq: 2209437 } },
//   { model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
//     speed: 2712,
//     times: 
//      { user: 6019671,
//        nice: 0,
//        sys: 7531171,
//        idle: 68571562,
//        irq: 1486578 } },
//   { model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
//     speed: 2712,
//     times: 
//      { user: 8128875,
//        nice: 0,
//        sys: 7196500,
//        idle: 66797031,
//        irq: 82156 } },
//   { model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
//     speed: 2712,
//     times: 
//      { user: 9011000,
//        nice: 0,
//        sys: 6586515,
//        idle: 66524890,
//        irq: 70468 } } ]

//12.获取系统总内存量(单位字节)
// console.log(os.totalmem());
// 4131401728