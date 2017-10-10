var EventEmitter = require('events');
var util = require('util');
function person(name,age){
    this.name = name;
    this.age = age;
}
util.inherits(person,EventEmitter);;
var xh= new person('小红','22');
// 定义事件
// xh.addListener('say',function(){
//     console.log(this.name);
// })
// xh.addListener('say',function(){
//     console.log(this.age);
// })

// 注册一个监听器 ,同addListener方法
// xh.on('say',function(){
//     console.log(this.name);
// })
// xh.on('say',function(){
//     console.log(this.age);
// })

// 事件注册一个单次监听器
function aa(){
console.log(this.name);
}
xh.once('say',aa);


// 移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器
xh.removeListener('say',aa);
//移除某个监听器的时候，不能直接移除，需要将指定移除 的函数 改为函数名的方式，然后再调用removeListener方法移除


//改名
xh.addListener('change',function(){
    this.name="王八";
})


// 返回指定事件的监听器数组。
xh.on('say',function(){
     console.log(111);
});
xh.on('say',function(){
    console.log(222);
});
xh.on('say',function(){
    console.log(333);
});
xh.on('say',function(){
    console.log(444);
});
xh.on('say',function(){
    console.log(555);
});
xh.on('say',function(){
    console.log(666);
});
xh.on('say',function(){
    console.log(777);
});
xh.on('say',function(){
    console.log(888);
});
xh.on('say',function(){
    console.log(999);
});
xh.on('say',function(){
    console.log(000);
});
console.log(xh.listeners('say'));
// 返回指定事件的监听器数量。
console.log(xh.listenerCount('say'));
//触发事件
xh.emit('change');



// 可以多次重复调用
// xh.emit('say');
// xh.emit('say');


