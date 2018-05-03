"use strict"
var a = [4, 5, 11, 9]

// var changePlaces = function (array) {
//     var firstElement = array[0];
//     var lastElement = array[array.length - 1];

//     array[0] = lastElement;
//     array[array.length - 1] = firstElement;

//     return array;
// }



var changePlaces = function (array) {
    var tmp = array[0];
    array[0] = array[array.length - 1];
    array[array.length - 1] = tmp;

    return array;
}
console.log(changePlaces(a));

// var temp;
// var i;
// var a = [4, 5, 11, 9]
// i = 1; i < a.length - 1; i++)
// temp = a[0];
// a[0] = a[a.length - 1];
// a[a.length - 1] = temp;
// return aray;

// console.log(a[i]);

// }
