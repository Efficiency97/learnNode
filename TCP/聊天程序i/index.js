/**
 *模块依赖
 */
var net=require('net');
var  count=0,
     users={};
/**
 *创建服务器
 */

var server=net.createServer(function (conn) {
	conn.write(
		'\n>welcome to \033[90mnode-chat\033[39m'
		+'\n>'+count+'other people are connecting'
		+'\n>please write your name and press enter'
	);
	count++;
	conn.setEncoding('utf8');
	var nickname;
	function broadcast(msg,exceptMyself) {
		for(var i in users){
			if(!exceptMyself||i!=nickname){
				users[i].write(msg);
			}
		}
	}
	conn.on('close',function () {
		count--;
		delete users[nickname];
		broadcast('\033[39m> '+nickname+' left the room\033[39m\n')
	});
	conn.on('data',function (data) {
		data=data.replace('\r\n','')
		console.log(data);
		if(!nickname){
			if(users[data]){
				conn.write('\033[93m>nickname already in use:try again\033[39m')
				return;
			}else{
				nickname=data;
				users[nickname]=conn;
				for(var i in users){
					users[i].write('\033[90m>'+nickname+' joined us\033[39m\n')
				}
			}
		}else{
			for(var i in users){
				if(i!=nickname){
					users[i].write('\033[96m> '+nickname+':\033[39m '+data+'\n');
				}
			}
		}
	});
});
/**
 *监听
 */
server.listen(3000,function () {
	console.log('\033[96m  server listening on *:1337\033[39m')
});
