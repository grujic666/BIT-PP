var a = ['1', '21', undefined, '42', '1e+3', Infinity];
for (var i = 0; i < a.length; i++) {

}

console.log(a);


var a = ['1', '21', undefined, '42', '1e+3', Infinity];
for (var i = 0; i < a.length; i++) {
    var value = parseFloat(a[i]);

    if (isNaN(value) == false && isFinite(value) == true) {
        console.log(value);

    }
}




