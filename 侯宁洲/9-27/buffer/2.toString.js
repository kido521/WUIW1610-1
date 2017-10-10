// let buf = Buffer.from("hello");
// console.log(buf)
// console.log(buf[0]);
// console.log(buf[1])
// console.log(buf.toString("utf8",1,2))

// var buf = Buffer.alloc(2);


// var buf1 = Buffer.from('A');
// var buf2 = Buffer.from("B");
// var bufList = [];
// bufList.push(buf1);
// bufList.push(buf2);
// console.log(Buffer.concat(bufList));
// console.log(Buffer.concat(bufList).toString())


// console.log(Buffer.isEncoding("gbk"))
// var arr = [1,2];
// var buf= Buffer.from('abc');
// console.log(Buffer.isBuffer(buf))


// var buf = Buffer.from("你好");
// console.log(buf)
// console.log(buf.length)
// console.log(buf.toString("utf8",0,4))


// var buf1 = Buffer.from("我");
// var buf2 = Buffer.from("我");
// console.log(buf1.equals(buf2))

var arr = [10,33];
var buf = Buffer.from(arr);
console.log(buf)
console.log(typeof buf.toJSON().data)