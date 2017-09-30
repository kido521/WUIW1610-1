const url = require("url");
var urlObj = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.aspxfans.com:8080',
    port: '8080',
    hostname: 'www.aspxfans.com',
    hash: '#home',
    search: '?boardID=5&ID=24618&page=1',
    query: 'boardID=5&ID=24618&page=1',
    pathname: '/news/index.asp',
    path: '/news/index.asp?boardID=5&ID=24618&page=1',
    href: 'http://www.aspxfans.com:8080/news/index.asp?boardID=5&ID=24618&page=1#name'
}
console.log(url.format(urlObj));