// var i = 0;
// var t = setInterval(function(){
//     console.log(++i);
//     if(i>=10){
//         clearInterval(t);
//     }
// },1000)
// console.log(t)

// var t = setTimeout(function(){
//     console.log("kkkk");
//     clearTimeout(t);
// },1000);

console.log('a');


setImmediate(function(){
    console.log('d')
})

console.log('b')