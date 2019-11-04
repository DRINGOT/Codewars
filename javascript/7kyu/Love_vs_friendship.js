// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// Solution(1)
function wordsToMarks(string) {
    let letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    return string.split('')
        .map(index => letters.findIndex(letter => letter == index) + 1)
        .reduce((total, value) => total + value, 0)
}