/*外部调用模块*/
/*拥有两个方法*/
var AdapterClass=require('./adapter.js');
exports.encode=function () {
    // 获取参数中加密模块名
  var encodeModule=arguments[0]?arguments[0]:null,
      // 算法类型，例如md5，sha1
      algorithm=arguments[1]?arguments[1]:null,
      // 需要加密的字符串或者字符的二进制数据流
      enstring=arguments[2]?arguments[2]:'',
      // 输出返回类型，例如'hex'
      returnType=arguments[3]?arguments[3]:'',
      // 加密时用的私钥
      encodeKey=arguments[4]?arguments[4]:'',
      // 加密时使用的加密编码
      encodeType=arguments[5]?arguments[5]:'';
  var Adapter=new AdapterClass();
  return Adapter.encode(encodeModule,algorithm,enstring,returnType,
                        encodeKey,encodeType);
};
exports.decode=function () {
    // 获取参数中加密模块名
    var encodeModule=arguments[0]?arguments[0]:null,
        // 算法类型，例如md5，sha1
        algorithm=arguments[1]?arguments[1]:null,
        // 需要加密的字符串或者字符的二进制数据流
        enstring=arguments[2]?arguments[2]:'',
        // 输出返回类型，例如'hex'
        returnType=arguments[3]?arguments[3]:'',
        // 加密时用的私钥
        encodeKey=arguments[4]?arguments[4]:'',
        // 加密时使用的加密编码
        encodeType=arguments[5]?arguments[5]:'';
    var Adapter=new AdapterClass();
    return Adapter.encode(encodeModule,algorithm,enstring,returnType,
        encodeKey,encodeType);
};