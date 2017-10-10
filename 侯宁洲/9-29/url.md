# url
处理url地址

## 使用
```
var url = require("url")
```

## URL各部分说明
协议    主机名 域名 端口号 路径
------  ------ ----  ---   -------
http:// www.baidu.com:80/php /index.php ?search=wq #hash
 --------- -----
 查询字符串 哈希
```
                        url.parse(string).query
                                       |
           url.parse(string).pathname  |
                       |               |
                       |               |
                     ------     ---------------
http://localhost:8888/start?foo=bar&hello=world
        --------------      
              |
              |
       req.header.host
```
foo=bar&hello=world

['foo=bar','hello=world']

'foo=bar'.split('=')
['foo','bar']


