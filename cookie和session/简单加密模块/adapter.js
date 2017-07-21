/*所有接口通过adapter调用*/
var util=require('util');
var Target=require('./target');
function Adapter() {
    Target.call(this);
    this.encode=function () {
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
                encodeType=arguments[5]?arguments[5]:'',
                //根据加密类型的不同，获取相应加密模块
                AdapteeClass=require('./adaptee_class/'+encodeModule),
                adapteeObj=new AdapteeClass();
            return adapteeObj.encode(algorithm,enstring,returnType,
                encodeKey,encodeType);
    };
    this.decode=function () {
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
                AdapteeClass=require('./adaptee_class/'+encodeModule),
                adpteeObj=new AdapteeClass();
            return adpteeObj.encode(algorithm,enstring,returnType,
                encodeKey,encodeType);
    };
}
util.inherits(Adapter,Target);
module.exports=Adapter;