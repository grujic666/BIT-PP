var a = [4, 4, 4, 2, 2, 9];
var i = 0;
var sum = 0;

do {
    if (a[i] % 2 == 0 && i % 2 == 1) {
        sum = sum + a[i];
    }


    i++;



} while (i < a.length);

console.log(sum);

var a = [4, 4, 4, 2, 2, 9];
var i = 0;
var sum = 0;


for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0 && i % 2 == 1) {
        sum = sum + a[i];
    }
}
console.log(sum);


