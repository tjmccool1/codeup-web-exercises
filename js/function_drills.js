/*TODO
*Make a new html file called function_drills.html
*Make a new js file called function_drills.js
*Each time you define a new function, be sure to run it with some test inputs.*/

//Make a function named sayHello(name) that returns "Hi " + name.
function sayHello(name) {
    var name = "bob";
    return ("Hi " + name);
}
console.log(sayHello(name));

// Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize("joe"));

//Write a function named upperCase(string)
function upperCase(string) {
    return (string.toUpperCase() + "!");
}
console.log(upperCase("run, run, run away"));

// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
console.log(identity("oops"));

// Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 === 1;
}
console.log(isOdd(3));
console.log(isOdd(14));

//Make a function named isEven(number)
function isEven(number){
    return number % 2 === 0;
}
console.log(isEven(3));
console.log(isEven(10));

//Make a function named isPositive(number)
function isPositive(number) {
    return number >= 0;
}
console.log(isPositive(-1));

// *Make a function named isNegative(number)
function isNegative(number) {
    return number < 0;
}
console.log(isNegative(-1));

// *Make a function named isBoolean(input)
function isBoolean(input) {
    // return input === typeof true || false;
    return typeof(input) === Boolean;
}
console.log(isBoolean(true));
// *Make a function named isTrue(boolean)
function isTrue(boolean) {
    return boolean === true;
}
console.log(isTrue(8));
// *Make a function named isFalse(boolean)
function isFalse(boolean) {
    return boolean === false;
}
console.log(isFalse(false));
// *Make a function named isTruthy(input)
function isTruthy(x) {
    return x == Boolean(true);
}
console.log(isTruthy(0));
/*function logTruthiness (val) {
    if (val) {
        console.log("Truthy!");
    } else {
        console.log("Falsy.");
    }
}
console.log(logTruthiness(true));*/
// *Make a function named isFalsy(input)
function isFalsey(x) {
    return x == Boolean(false);
}
// *Make a function named isVowel(letter)

function isVowel(letter){
    // var letter = "b";
    if (letter  !== "a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U") {
        return ("The " + letter + " is NOT a vowel")
    } else {
        return ("The " + letter + " is a vowel")
    }
}
console.log(isVowel("A"));

// *Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
function hasVowels(string) {

}
// *Make a function named isConsonant(letter)
// *Make a function named hasConsonants(string)
// *Make a function named isCapital(letter)
// *Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
// *    Make a function named isLowerCase(letter)
// *Make a function named hasLowerCase(string) that returns if a string has any lower cased
// *Make a function named isSpace(letter) that returns if a character is a space character
// *Make a function named hasSpaces(string) that returns if a string has any space characters
// *Make a function named isZero(number)
// *Make a function named increment(number) that returns a number plus one
// *Make a function named decrement(number) that returns a number minus one
// *Make a function named isFive(input)
// *Make a function named addFive(input) that adds five to some input.
// *    Make a function named isMultipleOfFive(input)
// *Make a function named isThree(input)
// *Make a function named isMultipleOfThree(input)
// *Make a function named isMultipleOfThreeAndFive(input)
// *Write a function named lowerCase(string)
// *Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
// *    Write a function named add(a, b) that returns the sum of a and b
// *Write a function named subtract(a, b) that returns a minus b
// *Write a function named multiply(a, b) that returns the product of a times b
// *Write a function named divide(a, b) that returns a divided by b
// *Write a function named remainder(a, b) that returns the remainder after dividing a by b
// *Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// *    Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
// *Make a function named trim(string) that removes empty spaces before and after the input.