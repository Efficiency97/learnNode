// 模块的引入，数据的初始化，创建http服务器，并且调用router.js文件
//获取本系统的根路径
global.BASE_DIR=__dirname;
//设置app文件夹的路径全局变量
global.APP=BASE_DIR+'/app';
global.CON=APP+'/controller/';
global.CORE=APP+'/core/';
global.LIB=BASE_DIR+'/node_modules/';
global.CONF=BASE_DIR+'/conf/';
global.STATIC=BASE_DIR+'/static/';
global.VIEW=BASE_DIR+'/view/';

//module引入
global.lib={
    http:require('http'),
    fs  :require('fs'),
    url :require('url'),
    querystring:require('querystring'),
    httpParam:require(LIB+'http_param'),
    //静态文件模块引入
    staticMoudle:require(LIB+'static_moudle'),
    router:require(CORE+'router'),
    action:require(CORE+'action'),
    jade:require('jade'),
    socket:require('socket.io'),
    path:require('path'),
    parseCookie:require('connect').utils.parseCookie,
    session:require(LIB+'node_session'),
    util:require('util')
};
 //主要用来存储socket连接用户信息，同样可添加命名空间
global.onlineList=[];
global.app=lib.http.creatServer(function(req,res){
    //为res添加jade模板引擎办法render
    res.render=function () {
        //获取render函数的第一个参数，做为指定需要访问的jade「模板名
        var templete=arguments[0];
        //获取第二个，作为传递给jade模块的引擎的参数对象
        var option=arguments[1];
        // 使用utf8读取jade模板文件内容
        var str=lib.fs.redFileSync(templete,'utf8');
        //获取jade模板，编译执行函数
        var fn=lib.jade.compile(str,{filename:templete,pretty:true});
        //传递参数并且编译执行jade模板文件，返回html文件，复制给page变量
        var page=fn(options);
        //调用router的router方法执行url路由请求处理
        lib.router.router(res,req);
        //启动本系统的socket服务
        global.io=lib.socket.listen(app);
    }
});