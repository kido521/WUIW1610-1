const url = require("url");
var u = "http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name";

var urlObj = url.parse(u);
urlObj.hash = "#home";
console.log(urlObj);
