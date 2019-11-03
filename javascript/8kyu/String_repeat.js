// Write a function called repeatString which repeats the given String src exactly count times.

// Solution (1)
function repeatStr(num, str) {
    let repeat = '';
    for (let i = 1; i <= num; i++) {
        repeat += str;
    }
    return repeat;
}

// Solution (2)
repeatStr = (n, s) => s.repeat(n)
