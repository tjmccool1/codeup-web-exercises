// ================================= CONDITIONALS BONUSES
//
// Bonus 1.
//
// Write a function (or multiple functions) that will return
// a boolean depending on if the string value passed to it
// as an argument is the name of a day of the week that starts with a T.
//     Otherwise, it should return false.
//
//     Example: dayOfTheWeekStartsWithT("Monday")     => returns false
// Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
// Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
//

function daysOftheWeekStartsWithT(input){
    input = input.toLowerCase();

    if(input === "tuesday" || input === "thursday") {
        return true;
    }else {
        return false;
    }
}

console.log(daysOftheWeekStartsWithT("texas"));
console.log(daysOftheWeekStartsWithT("tomorrow"));
console.log(daysOftheWeekStartsWithT("Tuesday"));
console.log(daysOftheWeekStartsWithT("THURSDAY"));

///=====or
function daysOftheWeekStartsWithT2(input){
    return input.toLowerCase() === "tuesday" || input.toLowerCase() === "thursday";
}
console.log(daysOftheWeekStartsWithT2("texas"));
console.log(daysOftheWeekStartsWithT2("tomorrow"));
console.log(daysOftheWeekStartsWithT2("Tuesday"));
console.log(daysOftheWeekStartsWithT2("THURSDAY"));

//
// Bonus 2.
//
// Write a function, isValidPassword, that takes in a string argument and returns true or false
// depending on whether or not all the following conditions are true:
//
// 1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
// 2) Contains at least one letter and one number
// 3) Contains at least one upper and one lower case letter
// 4) Only comprised of letters and numbers
// 5) EXTRA BONUS: is not the same forwards and backwards
console.log("password check starts here");
var input = prompt("pasword requirements \n " +
    "1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)\n" +
    "2) Contains at least one letter and one number\n" +
    "3) Contains at least one upper and one lower case letter\n" +
    "4) Only comprised of letters and numbers\n" +
    "5) EXTRA BONUS: is not the same forwards and backwards");
console.log(input);

function isValidPassword(input) {
    var passwordLength = length6(input);
    var passwordLetterNumber = oneNumberLetter(input);
    var passwordCase = oneUpperLower(input);
    var passwordSpecial = specialChar(input);
    var passwordAnagram = anagram(input);

    function length6(input) {
        console.log(input + " is " + input.length + " characters long.");
        return (input.length === 6)
    }
    console.log(length6(input));

    function oneNumberLetter(input) {
        
        return /[a-zA-Z]/.test(input) && /[0-9]/.test(input);
    }
    console.log(oneNumberLetter(input));

    function oneUpperLower(input) {
        return /[a-z]/.test(input) && /[A-Z]/.test(input)
    }
    console.log(oneUpperLower(input));

    function specialChar(input) {
        return !/[a-zA-Z0-9]/.test(input) === false;
    }
    console.log(specialChar(input));

    function anagram(input){
        return input.toLowerCase().split("").reverse().join("") !== input;
    }
    console.log(anagram(input));

    // if (passwordLength){
    //     if (passwordLetterNumber){
    //         if (passwordCase){
    //             if (passwordSpecial){
    //                 if (passwordAnagram) {
    //                     return alert("Password Accepted");
    //                 }else {
    //                     return alert("your password may not be an anagram.");
    //                 }
    //             }else{
    //                return alert("your password must beOnly comprised of letters and numbers");
    //             }
    //         }else{
    //             return alert("your password must contain at least one upper and one lower case letter");
    //         }
    //     }else{
    //         return alert("your password must have at least one letter and one number.");
    //     }
    // }else{
    //    return alert ("your password must be 6 characters");
    // }

    return (passwordLength && passwordLetterNumber && passwordCase && passwordSpecial && passwordAnagram);
}
console.log(isValidPassword(input) + "password valid");
//use multiple functions to define varibles in main function
// function length6(input) {
//     console.log(input + " is " + input.length + " characters long.")
//     return (input.length === 6)
// }
// console.log(length6(input));
//
// function oneNumberLetter(input) {
//     return /[a-zA-Z]/.test(input) && /[0-9]/.test(input);
// }
// console.log(oneNumberLetter(input));
//
// function oneUpperLower(input) {
//     return /[a-z]/.test(input) && /[A-Z]/.test(input)
// }
// console.log(oneUpperLower(input));
//
// function specialChar(input) {
//     return !/[a-zA-Z0-9]/.test(input) === false;
// }
// console.log(specialChar(input));
//
// function anagram(input){
//     return input.toLowerCase().split("").reverse().join("") !== input;
// }
// console.log(anagram(input));
