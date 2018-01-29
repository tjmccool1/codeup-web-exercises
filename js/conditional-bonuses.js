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

function isValidPassword() {
    
}