// Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:
// sumStrings('1','2') // => '3'

// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


function sum(a, b) {
    return (parseInt(a) || 0) + (parseInt(b) || 0);
}

function sumStrings(a, b) {
    a = a.split("").reverse();
    b = b.split("").reverse();
    total = [];
    let length = (a.length > b.length) ? a.length : b.length;

    for (let i = 0; i < length; i++) {
        s = sum(a[i], b[i]);
        total[i] = sum(total[i], s);
        if (total[i] > 9) {
            total[i] -= 10;
            total[i + 1] = 1;
        }
    }

    if (total[total.length - 1] == 0) {
        total[total.length - 1] = "";
    }

    return total.reverse().join("");
}