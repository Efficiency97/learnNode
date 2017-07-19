var BASE_DIR=__dirname,
    CONF=BASE_DIR+'/conf/',
    STATIC=BASE_DIR;
var sys=require("util"),
    url=require('url'),
    http=require('http'),
    path=require('path'),
    fs=require('fs');
var mmieConf=function getUrlConf() {
    var routerMsg={};
    try{
        var str=fs.readFileSync(CONF+'mmie_type.json','utf8');
        routerMsg=JSON.parse(str);
    }catch(e){
        sys.debug('JSON parse files')
    }
    return routerMsg
};
exports.getStaticFile=function (pathname,res) {
    var extname=path.extname(pathname);
    extname=extname?extname.slice(1):'';
    var realPath=STATIC+pathname;
    var mmieType=mmieConf[extname]?mmieConf[extname]:'text/plain';
    fs.exists(realPath,function (exists) {
        if(!exists){
            res.writeHead(404,{'Content-Type':'text/plain'})
            res.write("This request URL"+pathname+"was not")
            res.end();
        }else{
            fs.readFile(realPath,"binary",function (err,file) {
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
};


