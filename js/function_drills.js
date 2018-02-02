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
    /[aeiouAEIOU]/.test(string);
    return ("The word " + string + "has vowels");

}
// *Make a function named isConsonant(letter)
function isConsonant(letter) {
    if (!/[aeiouAEIOU]/.test(letter)){
        return ("The letter" + letter + " is a consonant") ;
    }
}
// *Make a function named hasConsonants(string)
function hasConstanants(string){
    if(!/[aeiouAEIOU]/){
        return("This string" + string + "has consonants.");
    }
}
// *Make a function named isCapital(letter)
function isCapital(letter){
    if(/[A-Z]/.test(letter){
        return ("This letter " + letter + "is a capital letter.")
    }
}
// *Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
function hasCapitalLetters(string){

}
// *Make a function named isLowerCase(letter)
function isLowerCase() {

}
// *Make a function named hasLowerCase(string) that returns if a string has any lower cased
function hasLowerCase() {

}
// *Make a function named isSpace(letter) that returns if a character is a space character
function isSpace() {

}
// *Make a function named hasSpaces(string) that returns if a string has any space characters
function hasSpaces() {

}
// *Make a function named isZero(number)
function isZero() {

}
// *Make a function named increment(number) that returns a number plus one
function increment() {

}
// *Make a function named decrement(number) that returns a number minus one
function decrement() {

}
// *Make a function named isFive(input)
function isFive() {

}
// *Make a function named addFive(input) that adds five to some input.
function addFive() {

}
// *    Make a function named isMultipleOfFive(input)
function isMultipleOfFive() {

}
// *Make a function named isThree(input)
function isThree() {

}
// *Make a function named isMultipleOfThree(input)
function isMultipleOfThree() {

}
// *Make a function named isMultipleOfThreeAndFive(input)
function isMultipleofThreeAndFive() {

}
// *Write a function named lowerCase(string)
function lowerCaseString() {

}
// *Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
function capitalizeEachWord() {

}
// *    Write a function named add(a, b) that returns the sum of a and b
function add() {

}
// *Write a function named subtract(a, b) that returns a minus b
function subtract() {

}
// *Write a function named multiply(a, b) that returns the product of a times b
function multiply() {

}
// *Write a function named divide(a, b) that returns a divided by b
function divide() {

}
// *Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder() {

}
// *Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank() {

}
// *    Make a function named isNumeric(input) returns true/false if the input is a number or numeric string
function isNumeric() {

}
// *Make a function named trim(string) that removes empty spaces before and after the input.
function trim() {

}