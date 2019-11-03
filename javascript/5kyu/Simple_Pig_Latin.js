// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

//Solution(1)
function pigIt(str) {
    let newArr = [];
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != '?' && arr[i] != '!') {
            let word = arr[i];
            let firstLetter = word.charAt(0);
            let wordChanged = word.slice(1) + firstLetter + "ay";
            newArr.push(wordChanged);
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr.join(" ");
}