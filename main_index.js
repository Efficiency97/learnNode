var fs=require('fs');
    url=require('url');
exports.goIndex=function goIndex(res,req) {
    var readpath=url.parse('index.html').pathname;
    var indexPage=fs.readFileSync(readpath);
    res.end(indexPage);
}
