// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Solution(1)
function simpleMultiplication(n) {
    if (n % 2) {
        return n * 9
    } else {
        return n * 8
    }
}