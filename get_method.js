var http=require('http'),
    url=require('url'),
    querystring=require('querystring');
http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname,
        paramStr=url.parse(req.url).query,
        param=querystring.parse(paramStr);
    if(pathname=='/favicon.ico'){
        return;
    }
    console.log(pathname);
    console.log(paramStr?paramStr : 'no');
    console.log(param);
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('success')
}).listen(1337);
console.log('running');