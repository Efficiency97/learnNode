var jade=require('jade');
var fn=jade.compile('div flow freestyle')();
console.log(fn)