var staticModule=require('./static_moudle'),
    http=require('http'),
    url=require('url'),
    fs=require('fs');
http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname;
    if(pathname=='/favicon.ico'){
        return;
    }else if(pathname=='/index'||pathname=='/'){
        goIndex(res)
    }else{
        staticModule.getStaticFile(pathname,res)
    }

}).listen(1337)
function goIndex(res,req) {
    var readpath=url.parse('index.html').pathname;
    var indexPage=fs.readFileSync(readpath);
    res.end(indexPage);
}
