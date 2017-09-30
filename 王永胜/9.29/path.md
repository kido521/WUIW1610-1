##path
----主要处理路径问题
    __filename 获取当前文件路径
    __dirname  获取当前文件夹所在目录
##使用
 先导入 var path = require(’path‘);

 ##方法
 1.path.normalize(path)//规范路径;
 2.连接两个路径(join(连接的目录p,"../"));
 3.解析为绝对路径path.resolve([...paths])；
 4.path.isAbsolute(path);判断是不是绝对路径
 5.path.dirname（path）
 6.path.extname（path）