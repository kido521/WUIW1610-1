# path
var path = require('path')

path.sep

path.normalize()
path.join()
path.reslove()
path.isAbsoulte()
path.relative()
path.dirname() 
path.basename()
path.extname()
path.parse()
path.format()


# url

url  ===> obj
url.parse()  

obj ===> url
url.format()
search ?k=v&k=v
query   k=v&k=v
url.reslove() 

# querystring
处理查询字符串
qs = require('querystring')

k=v&k=v ==> {k:v,k:v}
qs.parse()

{k:v,k:v} => k=v&k=v 
qs.stringify()

urlObj.search ="?"+k=v&k=v
urlObj.query  = "k=v&k=v"
