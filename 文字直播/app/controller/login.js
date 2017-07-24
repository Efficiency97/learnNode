module.exports=function () {
	var _res=arguments[0];
	var _req=arguments[1];
	this.checkSession=function (model) {
		if(module=='login'){
			return true;
		}else if(sessionLib.username&&sessionLib.username!=''){
			return true;
		}
	}
};
this.login=function () {
	lib.httpParam.POST('username',function (value) {
		sessionLib.username=value;
		if(value=='liang'){
			_res.render(VIEW+'live.jade',{'user':value});
		}else{
			_res.render(VIEW+'main.jade',{'user':value})
		}

	})
}