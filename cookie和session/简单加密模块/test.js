var encodeModule=require('./encode_module');
/*encode with hash*/
console.log('---encode with hash---');
var hashEncodeStr=encodeModule.encode('hash','md5','liang','hex');
console.log(hashEncodeStr);
/*encode with hmac*/
console.log('---encode with hmac---');
var hmacEncodeStr=encodeModule.encode('hmac','md5','liang','hex','lxd');
console.log(hmacEncodeStr);
/*encode with cipher*/
console.log('---encode with cipher---');
var cipherEncodeStr=encodeModule.encode('cipher','aes-256-cbc','liang','hex','salt_form','utf8');
console.log(cipherEncodeStr);
/*encode with decipher*/
console.log('---encode with decipher---');
var decipherEncodeStr=encodeModule.decode('cipher','aes-256-cbc',cipherEncodeStr,'utf8','salt_form','hex');
console.log(decipherEncodeStr);
