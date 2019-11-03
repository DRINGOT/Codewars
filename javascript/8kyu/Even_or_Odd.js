//Create a function (or write a script in Shell) that takes an integer as an argument
//and returns "Even" for even numbers or "Odd" for odd numbers.


// Solution (1)
function even_or_odd(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Solution (2)
function even_or_odd(num) {
    return num % 2 ? "Odd" : "Even"
}

// Solution (3)
even_or_odd = (n) => n % 2 ? "Odd" : "Even"