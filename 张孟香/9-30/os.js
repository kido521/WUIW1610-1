const os=require('os');


//console.log(os.hostname())            //获取计算机名字

//console.log(os.platform())            //操作系统平台

//console.log(os.type())                //操作系统名称的字符串

//console.log(os.arch())                //操作系统CPU体系结构
//result:   x64

//console.log(os.release())             //标识操作系统版本的字符串
//result: 6.1.7601

//console.log(os.uptime())              //电脑运行多长时间
//result: 4405.4138797

//console.log(os.totalmem())          //操作系统的内存
//result: 4212092928

//console.log(os.freemem())           //以字节为单位的空闲系统内存量
//result:   627978240

//console.log(os.cpus());              //返回一个包含有关安装的每个CPU /核的信息的对象数组

//result:   一个数组
//[ { model: 'Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz',
//    speed: 2394,
//    times: { user: 658823, nice: 0, sys: 400532, idle: 3471615, irq: 8221 } },
//    { model: 'Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz',
//        speed: 2394,
//        times: { user: 372811, nice: 0, sys: 267994, idle: 3889619, irq: 42151 } },
//    { model: 'Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz',
//        speed: 2394,
//        times: { user: 636203, nice: 0, sys: 425695, idle: 3468401, irq: 2761 } },
//    { model: 'Intel(R) Core(TM) i5-4210U CPU @ 1.70GHz',
//        speed: 2394,
//        times: { user: 268774, nice: 0, sys: 113911, idle: 4147473, irq: 2277 } } ]


//console.log(os.networkInterfaces());         //返回一个仅包含已分配了网络地址的网络接口的对象。

//result：   一个对象
//{ '本地连接':
//    [ { address: 'fe80::a1ab:dc23:120e:a77f',
//        netmask: 'ffff:ffff:ffff:ffff::',
//        family: 'IPv6',
//        mac: 'f0:76:1c:66:7f:b5',
//        scopeid: 13,
//        internal: false,
//        cidr: 'fe80::a1ab:dc23:120e:a77f/64' },
//        { address: '192.168.1.87',
//            netmask: '255.255.224.0',
//            family: 'IPv4',
//            mac: 'f0:76:1c:66:7f:b5',
//            internal: false,
//            cidr: '192.168.1.87/19' } ],
//        'Loopback Pseudo-Interface 1':
//    [ { address: '::1',
//        netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//        family: 'IPv6',
//        mac: '00:00:00:00:00:00',
//        scopeid: 0,
//        internal: true,
//        cidr: '::1/128' },
//        { address: '127.0.0.1',
//            netmask: '255.0.0.0',
//            family: 'IPv4',
//            mac: '00:00:00:00:00:00',
//            internal: true,
//            cidr: '127.0.0.1/8' } ] }


//console.log(os.tmpdir())        //返回一个字符串，指定临时文件的操作系统的默认目录
//result:   C:\Users\zz\AppData\Local\Temp

console.log(os.endianness())        //返回一个字符串，用于标识编译Node.js二进制文件的CPU的字节顺序。
//result:   LE
