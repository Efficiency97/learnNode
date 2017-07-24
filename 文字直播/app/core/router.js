//主要用来对url请求处理，同时分发到相应controller进行逻辑处理相应http信息
//获取login登陆模块对象，控制本系统登陆系统
var Login=require(CON+'login');
exports.router=function (res,req) {
	//解析编码后的url字符串
	var pathname=decodeURI(lib.url.parse(req.url).pathname);
	//初始化http的GET和POST请求
	lib.httpParam.init(req,res);
	global.sessionLib=lib.session.start(res,req);
	//获取请求的controller
	var model=pathname.substr(1),
			// 获取请求controller的函数方法
			controller=lib.httpParam.GET('c'),
			Class='';
	if(pathname=='/favicon.ico'){
		return;
	}else if(pathname='/'){
		res.render(VIEW+'index.jade');//默认进入jindex.jade主页
		return;
	}
};
try{
	Class=require(CON+model);
}catch (err){
	lib.staticMoudle(pathname,res,req,BASE_DIR)
}

if(Class){
	var login=new Login(res,req);
	//判断用户是否已經登陆
	var ret=login.checkSession(model);
	if(ret){
		var object=new Class(res,req)
		object[controller].call();
	}else{
		res.render(VIEW+'index.jade');
	}
}else{
	res.writeHead(404,{'Content-Type':'text/plain'});
	res.end('can not find sourse');
}
module.exports=function (res,req) {
	this.show=function () {
		console.log('this is a class method')
	}
}