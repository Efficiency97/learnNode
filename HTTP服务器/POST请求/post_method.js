var http=require('http'),
    fs=require('fs'),
    url=require('url'),
    querystring=require('querystring');

http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname;
    switch (pathname){
        case '/add':resAdd(res,req);
            break;
        default :resDefault(res);
            break;
    }

}).listen(1337)
function resDefault(res) {
    var readPath=url.parse('index.html').pathname;
    var indexPage=fs.readFileSync(readPath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(indexPage)
}
function resAdd(res,req) {
    var postData='';
    req.setEncoding('utf8');
    req.addListener('data',function (postDataChunk) {
        postData+=postDataChunk;
    });
    req.addListener('end',function () {
        var param=querystring.parse(postData);
        console.log(postData);
        console.log(param);
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end('success')
    })
}