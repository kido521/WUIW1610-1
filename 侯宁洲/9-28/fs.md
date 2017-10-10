# fs 文件系统模块——核心模块
fs  fileSystem
# 使用fs
使用fs模块需要导入
```
const fs = require('fs'); 
```

## fs模块常用操作
fs模块给我们提供了，同步和异步两种操作的方法。

文件的操作：打开、读取、修改、关闭、删除、拷贝、写入、创建

### 读取

案例：合并输出
a.txt
b.txt
读取a 与 b 最终将内容合并输出

function Object(){}
Object.keys = function(){}
Object.values = function(){}

Object.keys(dfdsf)

fs.readFile()
fs.readFileSync()

fs.writeFile(file,data[,options],callback)
fs.writeFileSync()

fs.appendFile()
fs.appendFileSync()

flag


同步错误：try catch 
异步错误：if(err)  throw err

copy
-----------------------------

fs.unlink(path,callback)
fs.unlinkSync(path)
删除文件

fs.rename(oldpath,newpath,callback)
fs.renameSync(oldpath,newpath)
重命名文件或者文件夹

fs.existsSync(path)
检测文件或文件夹是否存在

文件夹的操作：创建、删除、修改、遍历


fs.mkdir()
fs.mkdirSync()
fs.rmdir()
fs.rmdirSync()

fs.readdir(path[,options],callback)
fs.readdirSync(path[, options])

fs.stat(path, callback)
fs.statSync(path)

stats.isFile()
stats.isDirectory() 

文件或文件夹权限

读取 r 4
写入 w 2
执行 x 1
     - 0

rwx r-x r--
111 101 100    
 7    5   4  

练习：删除一个文件夹及所有文件 
1. 文件夹必须为空才能删除
   rmdir()
2. 删除文件夹的所有文件或文件夹


1. 读取文件夹
   files.length ==0  直接删除
   files.length >0  进行下一步
2. 读取该文件或文件夹状态
   根据状态判断是文件？还是文件夹？
   是文件  fs.unlink() 删除
   
   是文件夹  重复第一步、第二步  
   删除文件夹









1. 读取一个文件中的内容(同步/异步) 
   异步 throw \ 同步 try catch
2. 同时读取多个文件并返回结果
   异步\计数\同步
3. 给一个文件写入内容(同步/异步)
4. 实现一个可以复制文件的方法
5. 给一个文件末尾插入内容
6. 删除一个文件
7. 重命名一个文件
8. 创建文件夹
9. 创建多级文件夹
10. 读取文件夹
11. 删除文件夹
12. 删除文件夹及内容

作业:
1. 拷贝单个文件  
   copy(a.js,'./cccc/b.js')
2. 深层次拷贝
	function copy(src,target){
	    //实现
	}