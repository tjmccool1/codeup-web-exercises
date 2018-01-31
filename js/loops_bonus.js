"use strict";


// BONUSE
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//
// Example input: "aBc12#"
// Example output: "AbC12#"

function isUppercase(letter) {
    return letter === letter.toUpperCase();
}

var input = "aBc12#";

function toggleAllCharacters(input){
    var output = "";
    for (var i = 0; i <= input.length; ++i){
        console.log(input[i]);
        if(isUppercase(input[i])){
            output += input[i].toLowerCase()
        }else{
            output += input[i].toLowerCase()
        }
    }
    return output;
}
console.log(toggleAllCharacters(input));

/

// BONUS 2:
//
// Write a function that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//
// Example Input: "geek5"
// Example Output: "Yes"
//
// Example Input: "codingchallenge25"
// Example Output: "No"