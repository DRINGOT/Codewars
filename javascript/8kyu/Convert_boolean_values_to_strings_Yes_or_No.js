// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// Solution(1)
function boolToWord(bool) {
    if (bool) {
        return "Yes";
    } else {
        return "No"
    }
}

// Solution(2)
boolToWord = bool => bool ? 'Yes' : 'No'
