//zbir dva broja

function sum(a, b) {

    var result;
    result = a + b;

    return result;

}
var s;
s = sum(2, 3);
console.log(s);





function sum() {

    //arguments [2,3]

    var result = 0;

    for (var i = 0; i < arguments.length; i++) {


        result = result + arguments[i];
    }

    return result;

}
var s;
s = sum(2, 3);
console.log(s);

