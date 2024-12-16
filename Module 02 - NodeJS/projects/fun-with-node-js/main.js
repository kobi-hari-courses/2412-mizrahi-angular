var clrs = require('@colors/colors');
var mathjs = require('mathjs');

var i = 10;
var j = 20;

var res = mathjs.atan(i);


console.log('Welcome to Node JS'.green);
console.log('I = '.red, i);
console.log('J = '.magenta, j);
console.log('I + J = '.rainbow, i + j);
console.log('arc tan of I = '.cyan, res);

