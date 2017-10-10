var os = require('os');
// console.log(os);

// tempdir
// console.log(os.tmpdir());
///var/folders/9t/1zmrjk8x36qfyy0y3sryrrs00000gn/T

// endianness
// console.log(os.endianness());
//LE

// hostname
// console.log(os.hostname());
//jingyangdeMacBook-Air.local

//type
// console.log(os.type());
//Darwin

// platform
// console.log(os.platform());
//darwin

// arch
// console.log(os.arch());
//x64

// release
// console.log(os.release());
//15.6.0

// uptime
// console.log(os.uptime());
//869968

// loadavg
// console.log(os.loadavg());
//[ 1.55078125, 1.65283203125, 1.912109375 ]

// totalmem
// console.log(os.totalmem());
//8589934592

// freemem
// console.log(os.freemem());
//827756544

// cups
// console.log(os.cpus());
//[ { model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
// speed: 1600,
//     times: { user: 43239720, nice: 0, sys: 33187230, idle: 372070150, irq: 0 } },
// { model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
//     speed: 1600,
//     times: { user: 11356160, nice: 0, sys: 7327460, idle: 429805430, irq: 0 } },
// { model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
//     speed: 1600,
//     times: { user: 37666920, nice: 0, sys: 23915860, idle: 386906420, irq: 0 } },
// { model: 'Intel(R) Core(TM) i5-5250U CPU @ 1.60GHz',
//     speed: 1600,
//     times: { user: 11868380, nice: 0, sys: 7553130, idle: 429067420, irq: 0 } } ]

// network
// console.log(os.networkInterfaces());
//{ lo0:
// [ { address: '::1',
//     netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
//     family: 'IPv6',
//     mac: 'fe:80:00:00:00:00',
//     scopeid: 0,
//     internal: true },
//     { address: '127.0.0.1',
//         netmask: '255.0.0.0',
//         family: 'IPv4',
//         mac: 'fe:80:00:00:00:00',
//         internal: true },
//     { address: 'fe80::1',
//         netmask: 'ffff:ffff:ffff:ffff::',
//         family: 'IPv6',
//         mac: 'fe:80:00:00:00:00',
//         scopeid: 1,
//         internal: true } ] }