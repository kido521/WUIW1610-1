# path
path 模块主要是用于处理路径问题

——filename 获取当前文件路径
——dirname 获取当前文件所在目录

## 使用先导入
###属性
###方法  
	path.normalize  规范化路径  
	path.join  用于连接路径  
	path.resolve([from ...],to)   将to参数解析为绝对路径  
	path.isAbsolute  判断参数path 是否为绝对路径  
	path.relative  用于将路径转为相对路径
	path.dirname  返回路径中带表文件夹的部分
	path.basename  返回路径中的文件名
	path.extname  返回路径中文件的后缀名
	path.parse  返回路径字符串的对象
	path.format  从对象中返回路径字符串