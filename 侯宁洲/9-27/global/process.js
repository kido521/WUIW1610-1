// console.log(process.cwd());
//
// process.chdir('../');
// require(process.cwd()+'/abc.js');
// console.log(process.cwd());


// console.log(process.memoryUsage())




// setInterval(function(){
//     console.log(process.uptime())
// },100)

// console.log(process.argv);
// console.log(process.platform);
// console.log(process.version)
// console.log(process.versions)

/*
* 回调函数都是异步代码
* 同步执行结束后再执行异步的代码
* */
process.nextTick(()=>{
    console.log('c')
});

console.log('a');
console.log('b');


