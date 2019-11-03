// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished For Loop!
// Code:
// function createArray(number){
//     var newArray = [];

//     for(var counter = 1; counter <= number;){
//       newArray.push(counter);
//     }

//     return newArray;
//   }

// Solution(1)
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}