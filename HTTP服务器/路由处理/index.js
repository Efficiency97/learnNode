var res,req;
    fs=require('fs');
    url=require('url');
exports.init=function (response,request) {
    res=response;
    req=request
}
exports.index=function () {
    var readPath=url.parse('index.html').pathname;
    var indexPage=fs.readFileSynnc(readPath);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(indexPage)
}