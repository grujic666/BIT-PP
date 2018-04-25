var arr = [3, 11, -5, -3, 2];
var sum = 0;

for (var i = 0; i < arr.length; i++) {
    // console.log("value: " + arr[i], "index: " + i);
    var character = arr[i];
    if (character > 0) {
        sum = sum + character;
    }
}

console.log(sum);


// a[0]
// a[1]
// a[2]

var string = "Lenovo";
var strSum = 0;

for (var i = 0; i < string.length; i++) {
    var character = string[i];
    if (character === "o") {
        strSum = strSum + 1;
    }
}

console.log(strSum);


var a = [-3, 11, 5, 3.4, -8];
var i;

for (var i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        a[i] = a[i] * 2
    }
}

console.log(a);

var n = 234
if (n > 100 && n <= 999) {
    console.log("Three digit long number");
} else {
    console.log("Not three digits long number");
}

var i;
var j;

var n = 3;

for (i = 0; i < n; i++) {

    if (i == 0 || i == n - 1) {
        //stampamo n zvezdica

        var stars = "";
        for (j = 0; j < n; j++) {
            stars = stars + "*";
        }
        console.log(stars);

    } else {
        var line = "";;

        //zvezdica
        line = line + "*";

        //n-2 beline
        for (j = 1; j <= n - 2; j++) {
            line = line + " ";
        }

        //zvezdica
        line = line + "*";

        console.log(line);
    }
}


