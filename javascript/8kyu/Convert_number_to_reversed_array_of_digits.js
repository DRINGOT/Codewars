// You have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

// Solution(1)
function digitize(n) {
    return String(n).split("").reverse().map(Number);
}