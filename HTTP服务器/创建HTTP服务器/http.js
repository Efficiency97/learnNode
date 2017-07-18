var http=require('http');
    fs=require('fs');
    url=require('url');
http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname;
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    switch(pathname){
        case '/index':resIndex(res);
        break;
        case '/img':resImg(res);
        break;
        default:resDefault(res);
        break;
    }
}).listen(1337);
function resIndex(res) {
    var readPath=url.parse('index.html').pathname;
    var indexPage=fs.readFileSync(readPath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(indexPage);
}
function resImg(res) {
    var readPath=url.parse('logo.jpg').pathname;
    var indexPage=fs.readFileSync(readPath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(indexPage);
}
function resImg(res) {
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end("can't find sourse");
}

