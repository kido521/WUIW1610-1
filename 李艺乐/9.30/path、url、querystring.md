path 模块
path 模块提供用于处理文件和目录路径的实用路径
访问：
    const path = require("path");
    1.path.sep   提供特定于平台的路径段分隔符
      \ 在window上
      / 在posix上

      在Windows上，正斜杠（/）和反斜杠（\）都被接受为路径段分隔符; 但是，path方法只添加反斜杠（\）。
    2.path.resolve()   方法将一系列路径或路径段解析为绝对路径。

#Path
>path模块主要是用于处理路径的问题。

__filename 获取当前文件路径
__dirname  获取当前文件所在目录

##使用

var path = require('path');


path.sep--平台的文件路径分隔符"/"或"\"
path.normaize(p)  规范化路径。注意'..'和'.'
path.join([path1][,path2][,path3]...) 用于连接路径，该方法的主要哦用途在于。会正确使用当前系统的路径分隔符，Unix系统是"/"，window系统是"\"
path.resolve([from...],to)将to参数解析为绝对路径
path.isAbsolute(path) 半段参数path是否是绝对路径
path.relative(from,to)用于将路径转为相对路径
path.dirname(p)返回路径中代表文件夹的部分
path.basename(p[,ex])返回路径中的文件名
path.exname(p)返回路径中文件的后缀名
path.parse(pathString)返回路径字符串的对象
path.format(pathObject)从对象中返回路径字符串(path.parse相反)



__filename与__dirname
    1.__firename变量
    node.js中，在任何模块文件内部，可使用__filename变量获取当前模块文件的带有完整绝对路径的文件夹。
    2.__dirname
    获取当前文件所在目录的完整目录名：













