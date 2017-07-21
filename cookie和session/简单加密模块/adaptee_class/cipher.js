var crypto=require('crypto');
module.exports=function () {
    this.encode = function () {
        var algorithm=arguments[0]?arguments[0]:null,
            // 需要加密的字符串或者字符的二进制数据流
            enstring=arguments[1]?arguments[1]:'',
            // 输出返回类型，例如'hex'
            returnType=arguments[2]?arguments[2]:'',
            // 加密时用的私钥
            encodeKey=arguments[3]?arguments[3]:'',
            // 加密时使用的加密编码
            encodeType=arguments[4]?arguments[4]:'';
        var cipher = crypto.createCipher(algorithm,encodeKey);
        cipher.update(enstring,encodeType,returnType);
        return cipher.final(returnType);
    };
    this.decode=function () {
        var algorithm=arguments[0]?arguments[0]:null,
            // 需要加密的字符串或者字符的二进制数据流
            enstring=arguments[1]?arguments[1]:'',
            // 输出返回类型，例如'hex'
            returnType=arguments[2]?arguments[2]:'',
            // 加密时用的私钥
            encodeKey=arguments[3]?arguments[3]:'',
            // 加密时使用的加密编码
            encodeType=arguments[4]?arguments[4]:'';
        var decipher = crypto.createDecipher(algorithm,encodeKey);
        decipher.update(enstring,returnType,encodeType);
        return decipher.final(encodeType);
    };
};