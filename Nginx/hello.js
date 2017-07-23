var http=require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{'Cont-Type':'text/html'});
    res.end('<div>Hello</div>')
}).listen(1337,'127.0.0.1');