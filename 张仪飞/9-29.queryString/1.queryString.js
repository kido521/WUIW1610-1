

var qs=require('querystring');
var url=require('url');
var u="http://user:pass@host.com:8080/users/user.php?userName=zhangsan&age=20&sex=nan#hasa";
var obj=url.parse(u);
var query=obj.query;
var qobj=qs.parse(query);
qobj.baz="ahhaha";
var querystr=qs.stringify(qobj);
obj.search='?'+querystr;
obj.query=querystr;
console.log(url.format(obj));









	
/*                     parse
	"123,456&345.123"--------->{}

		Stringify
	{}---------->"123,456&345.123"






 */