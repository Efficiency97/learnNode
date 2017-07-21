var http=require('http'),
    formidable=require('formidable'),
    BASE_DIR=__dirname;
function upload(req,res) {
    var readPath=__dirname+'/'+url.parse('show_image/html').pathname;
    var indexPage=fs.readFile(readPath);
    var form=new formidable.IncomingForm;
    form.parse(req,function (err,fields,files) {
        fs.renameSync(files.image.path,BASE_DIR+'/uploadfile/lo.png')
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(indexPage)
    });
}
