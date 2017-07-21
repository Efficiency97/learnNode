/*创建了encode和decode方法，使继承类adapter获取这两个方法*/
module.exports=function () {
    this.encode=function () {
        console.log('no this function exists');
    };
    this.decode=function () {
        console.log('no this function exists')
    }
};