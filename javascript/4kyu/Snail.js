// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]

// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

// Solution(1)
let snail = function (arr) {
    let res = [];

    while (arr.length > 0) {
        res = res.concat.apply(res, arr.splice(0, 1));

        for (let i = 0; i < arr.length; i += 1) {
            res = res.concat(arr[i].splice(arr.length));
        }

        let temp = [].concat.apply([], arr.splice(arr.length - 1)).reverse();
        res = res.concat.apply(res, temp);

        for (let i = arr.length - 1; i >= 0; i -= 1) {
            res = res.concat(arr[i].splice(0, 1));
        }
    }
    return res;
}

// Solution(2)
snail = function (array) {
    let res = [];

    while (array.length) {
        res.push(...array.shift(), ...array.map(row => row.pop()));

        array.reverse().map(row => row.reverse());
    }

    return res;
}