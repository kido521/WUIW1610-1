# fs 

var fs = require('fs');

fs.readFile()
fs.readFileSync()

fs.writeFile()
fs.writeFileSync()

fs.appendFile()
fs.appendFileSync()

fs.unlink()
fs.unlinkSync()

fs.rename()
fs.renameSync()

fs.existsSync() 检测文件或文件夹是否存在

fs.mkdir()
fs.mkdirSync()

fs.rmdir()
fs.rmdirSync()

fs.readdir()
fs.readdirSync()

fs.stat()      读取状态
fs.statSync()

stat.isFile()
stat.isDirectory()

0. 同时读取多个文件合并输出
   1> 回调嵌套
   2> 同步读取
   3> 通过逻辑完成
      []
      function check(num,callback){
			
      }
1. 创建多级文件夹
2. 删除一个目录
