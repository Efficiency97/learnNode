/*static_module.js*/
var fs = require('fs');
var sys = require('util');
var http = require('http');
var url = require('url');
var path = require('path');


var BASE_DIR = __dirname;
var CONF = BASE_DIR + '/conf/';
var STATIC = BASE_DIR;
var mimeConf = function getUrlConf(){
    var routerMsg = {};
    try{
        var str = fs.readFileSync(CONF + 'mime_type.json', 'utf8');
        routerMsg = JSON.parse(str);
    }catch(e){
        sys.debug("JSON parse fails")
    }
    return routerMsg;
}
var CACHE_TIME = 60*60*24*365;

exports.getStaticFile = function(pathname, res, req){
    var extname = path.extname(pathname);
    extname = extname ? extname.slice(1) : '';
    var realPath = STATIC + pathname;
    var mimeType = mimeConf[extname] ? mimeConf[extname] : 'text/plain';
    console.log(extname);

    fs.exists(realPath, function(exists){
        if(!exists){
            console.log(realPath + " is not found.")
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write('Sorry, Not Found This Source.');
            res.end();
        }else{
            var fileInfo = fs.statSync(realPath);
            var lastModified = fileInfo.mtime.toUTCString();

            if(mimeConf[extname]){
                var date = new Date();
                date.setTime(date.getTime() + CACHE_TIME * 1000);
                res.setHeader("Expires", date.toUTCString());
                res.setHeader("Cache-Control", "max-age=" + CACHE_TIME);
                res.setHeader("Last-Modified", lastModified);
            }
            if(req.headers['if-modified-since'] && lastModified == req.headers['if-modified-since'] ){
                res.writeHead(304, "Not Modified");
                res.end();
            }else{

                fs.readFile(realPath, "binary", function(err, file){
                    if(err){
                        res.writeHead(500, {'Content-Type': 'text/plain'});
                        res.end(err);
                    }else{
                        res.setHeader('Last-Modified',lastModified)
                        res.writeHead(200, {'Content-Type': mimeType});
                        res.write(file, "binary");
                        res.end();
                    }
                })
            }
        }
    })

}

