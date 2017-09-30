/**
 * Created by Administrator on 2017/9/29 0029.
 */
var path =  require ('path');
var p1 = "../GIT.txt";
var p2 = __filename;
console.log(path.isAbsolute(p1));
console.log(path.isAbsolute(p2));