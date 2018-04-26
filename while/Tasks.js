function isString(s) {
    //true ako je s string
    //false ako nije
    if (typeof s == 'string') {
        return true;

    } else {
        return false;
    }

}

var word = 'abc';

var result = isString(word);

if (result == true) {
    console.log('It is string!');

} else {
    console.log('It is not string!');
}


function isString(s) {

    if (typeof s == 'string' && s.length == 0) {
        return true;

    } else {
        return false;
    }

}

s = '';

var result = isString(s);

if (result) {
    console.log("true");

} else {
    console.log("false");
}




function conatenate(s, n) {
    if (typeof s === 'string') {

        sum = s;
        for (i = 1; i < n; i++) {
            sum += s;

        }
        return sum;
    } else {
        ispis = 'Niste uneli string';
        return ispis;
    }

}
var s = 'abc';
var n = 3;
var result = conatenate(s, n);

console.log(result);



function letter(s1, s2) {
    if (typeof s1 === 'string' && typeof s2 === 'string' && s2.length === 1) {
        var counter = 0;
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                counter += 1;
            }
        }

    } else {
        result = 'Nije dobar unos';
        return result;
    }

    return counter
}
var s1 = 'My random string';
var s2 = 'n'
var ispis = letter(s1, s2);

console.log(ispis);




function position(s1, s2) {
    if (typeof s1 === 'string' && typeof s2 === 'string' && s2.length === 1) {
        for (var i = 0; i < s1.length; i++) {
            if (s1[i] === s2) {
                return i + 1;
            }
        }

    } else {
        return 'Nije dobar unos';

    }

    return - 1;
}
var s1 = 'My random string';
var s2 = 'n'
var ispis = position(s1, s2);

console.log(ispis);



