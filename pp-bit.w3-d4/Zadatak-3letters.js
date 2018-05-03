"use strict"
var a = "prograMming";
var b = ""
var appearances = function (b) {

    var i;
    for (i = 0; i < a.length; i++) {
        if (a[i] === 'm' || a[i] === 'M') {
            b[i] = b + "*";

        } else {
            b[i] = a[i]
        }

    }
    return b
}

console.log(appearances(b));

