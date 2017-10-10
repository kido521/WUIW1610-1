const os = require('os');

os.tmpdir()
// 返回操作系统的默认临时文件夹
console.log(os.tmpdir());   //C:\Users\ADMINI~1\AppData\Local\Temp

os.endianness()
// 返回 CPU 的字节序
console.log(os.endianness());    //LE 将低序字节存储在起始地址

os.hostname()
// 返回操作系统的主机名
console.log(os.hostname()); //USER-20170725DI

os.type()
// 返回操作系统名
console.log(os.type());  //Windows_NT

os.platform()
// 返回操作系统名
console.log(os.platform());  //win32

os.arch()
// 返回操作系统 CPU 架构
console.log(os.arch());  //ia32

os.release()
// 返回操作系统的发行版本
console.log(os.release());  //6.1.7601

// os.uptime()
// 返回操作系统运行的时间，以秒为单位
console.log(os.uptime());  //4710.5867655

os.loadavg()
// 返回一个包含 1、5、15 分钟平均负载的数组
console.log(os.loadavg());  //[ 0, 0, 0 ]

os.totalmem()
// 返回系统内存总量，单位为字节。
console.log(os.totalmem());  //3215212544
console.log(os.totalmem()/1024*1024*1024);  //6.1.7601

os.freemem()
// 返回操作系统空闲内存量，单位是字节。
console.log(os.freemem());  //884518912

os.cpus()
// 返回一个对象数组，包含所安装的每个 CPU/内核的信息
console.log(os.cpus());
//[ { model: 'Intel(R) Core(TM)2 Duo CPU     T6670  @ 2.20GHz',
// speed: 2194,
//     times: { user: 526534, nice: 0, sys: 243813, idle: 4058132, irq: 13962 } },
// { model: 'Intel(R) Core(TM)2 Duo CPU     T6670  @ 2.20GHz',
//     speed: 2194,
//     times: { user: 459516, nice: 0, sys: 343873, idle: 4023983, irq: 125159 } } ]

os.networkInterfaces()
// 获得网络接口列表。
console.log(os.networkInterfaces());
// { '无线网络连接 2':
//     [ { address: 'fe80::a028:baa5:70ea:f5a7',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: '00:1e:65:e7:b6:9b',
//         scopeid: 14,
//         internal: false },
//         { address: '172.20.104.1',
//             netmask: '255.255.0.0',
//             family: 'IPv4',
//             mac: '00:1e:65:e7:b6:9b',
//             internal: false } ],
//         '本地连接':
//     [ { address: 'fe80::c184:79cc:6867:3a62',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: '18:a9:05:cb:19:0f',
//         scopeid: 12,
//         internal: false },
//         { address: '192.168.1.45',
//             netmask: '255.255.224.0',
//             family: 'IPv4',
//             mac: '18:a9:05:cb:19:0f',
//             internal: false } ],
//         'Loopback Pseudo-Interface 1':
//     [ { address: '::1',
//         netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//         family: 'IPv6',
//         mac: '00:00:00:00:00:00',
//         scopeid: 0,
//         internal: true },
//         { address: '127.0.0.1',
//             netmask: '255.0.0.0',
//             family: 'IPv4',
//             mac: '00:00:00:00:00:00',
//             internal: true } ] }
