/*
实现简单的session校验过程，主要思路通过req对象中的header获取cookie
并对cookie进行解析获取session id，判断是否存在这个session id值，从而返回
或成生新的id，*/
var start=function (req,res) {
  var conn={res:res,req:req};
  var cookie={};
  if(typeof conn.req.headers.cookie!=="undefined"){
      conn.req.headers.cookie.split(';').forEach(function (cookie) {
          
      })
      }
};
