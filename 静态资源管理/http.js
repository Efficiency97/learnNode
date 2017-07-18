var http=require('http'),
    fs=require('fs'),
    url=require('url'),
    BASE_DIR=__dirname;
http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname;
    var realPath='/static'+pathname;
    if(pathname=='/favicon.ico'){
        return;
    }else if(pathname=='/index'||pathname=='/'){
        goIndex(res)
    }else{
        dealWithStatic(pathname,realPath,res)
    }
}).listen(1337);
console.log("running");
function goIndex(res,req) {
    var readpath=url.parse('index.html').pathname;
    var indexPage=fs.readFileSync(readpath);
    res.end(indexPage);
}

function dealWithStatic(pathname,realpath,res) {
    fs.exists(realpath,function (exists) {
        if(!exists){
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.write('This request URL'+pathname+'was not')
            res.end();
        }else{
            var pointPosition=pathname.lastIndexOf('.'),
                mmieString=pathname.substring(pointPosition+1),
                mmieType;
            switch (mmieString){
                case 'css':mmieType="text/css";
                break;
                case 'jpg':mmieType="image/jpg";
                break;
                default: mmieType="text/plain";
            }
            fs.readFile(realpath,"binary",function (err,file) {
                if(err){
                    res.writeHead(500,{'Content-Type':'text/plain'});
                    res.end(err);
                }else{
                    res.writeHead(200,{'Content-Type':mmieType});
                    res.write(file,"binary");
                    res.end()
                }
            });
        }
    });
}
