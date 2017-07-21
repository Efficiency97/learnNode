/*所有接口通过adapter调用*/
var util=require('util');
var Target=require('./target');
function Adapter() {
    Target.call(this);
}
util.inherits(Adapter,Target);
module.exports=Adapter;