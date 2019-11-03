// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// Intervals

// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
// Overlapping Intervals

// List containing overlapping intervals:

// [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ]

// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
// Examples:

// sumIntervals( [
//    [1,2],
//    [6, 10],
//    [11, 15]
// ] ); // => 9

// sumIntervals( [
//    [1,4],
//    [7, 10],
//    [3, 5]
// ] ); // => 7

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] ); // => 19

//Solution(1)
function sumIntervals(intervals) {
    if (!intervals.length) return 0;
    intervals = intervals.sort(function (a, b) { return a[0] - b[0]; })

    let total = 0;
    let base = null;

    for (i = 0; i < intervals.length; i++) {
        if (i === intervals.length - 1) {
            if (base) {
                total += base[1] - base[0];
            } else { total += intervals[i][1] - intervals[i][0]; }
            return total;
        }
        let next = intervals[i + 1];
        if (!base) {
            base = intervals[i];
        }
        if (base[1] < next[0]) {
            total += base[1] - base[0]; base = null;
        } else if ((base[1] === next[1]) || (base[1] > next[0] && base[1] < next[1])) {
            base[1] = next[1];
        }
    } if (base) {
        total += base[1] - base[0];
    }
}

//Solution(2)
function sumIntervals(intervals) {
    let numbers = [];
    intervals.forEach(function (interval) {
        for (let i = interval[0]; i < interval[1]; i++) {
            if (numbers.indexOf(i) == -1) numbers.push(i);
        }
    });
    return numbers.length;
}