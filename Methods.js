

var n = 12345;

var s = new String(n)  //"12345"
var strReverse = s.split(''); //[1, 2, 3, 4, 5]
var reversed = strReverse.reverse();
var join = reversed.join('');


console.log(join);
console.log(reversed);
console.log(strReverse);


console.log(typeof n);
console.log(strReverse);



var n = 12345
var s = new String(n);
var strReverse = parseInt(s.split('').reverse().join(''));
console.log(strReverse);

console.log(typeof strReverse);





var s = 'Webmaster';
var low = s.toLowerCase();
var strReverse = low.split('').sort().join('');

console.log(strReverse);


var s = ('John Snow');
var a = new Array(s);
var split = s.split();

console.log(split);





