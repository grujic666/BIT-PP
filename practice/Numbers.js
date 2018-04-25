var n = 923;
var digit;
var digits = [];
var i = 0;

while (n > 0) {
    digit = n % 10;
    n = (n - digit) / 10;
    //console.log(digit);
    digits[i] = digit;
    i++;
}
var f;
var l;
for (f = 0; l = digits.length - 1, f < l; f++ , l--) {
    var tmp;
    tmp = digits[f];
    digits[f] = digits[l];
    digits[l] = tmp;
}

console.log(digits);

var i = 0;
while (i < 10) {
    console.log(i);
    i++;

}



