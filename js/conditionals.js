"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
console.log("hello");
//user Choice
    var userChoice = confirm("Would you like to enter a number?");
    console.log(userChoice);
    if (userChoice === true) {
        var numberChoice = prompt("What Number would you like?");
    }else {
        console.log("do nothing");//do nothing
    }

//- whether the number is even or odd

    var evenOdd = (numberChoice % 2 === 0);
    if (evenOdd) {
        alert("your number is even");
    } else {
        alert("Your number is odd");
    }

//- what the number plus 100 is
    var addHundred = (parseInt(numberChoice) + 100);
    alert("Your number plus 100 is " + addHundred);

//- if the number is negative or positive
    var negPos = (numberChoice >= 0);
    if (numberChoice) {
        alert("Your number is positive.");
    } else {
        alert("your number is negative");
    }

// refactored to use function
// function choice(number) {
//     var userChoice = confirm("Would you like to enter a number?");
//     console.log(userChoice);
//     if (userChoice === true) {
//         var numberChoice = prompt("What Number would you like?");
//     } else {
//         console.log("do nothing")//do nothing
//     }
// }
//
// function userInfo(number) {
//     //- whether the number is even or odd
//     var evenOdd = (numberChoice % 2 === 0);
//     if (evenOdd) {
//         alert("your number is even");
//     } else {
//         alert("Your number is odd");
//     }
//     //- what the number plus 100 is
//     var addHundred = (parseInt(numberChoice) + 100);
//     alert("Your number plus 100 is " + addHundred);
//
//     //- if the number is negative or positive
//     var negPos = (numberChoice >= 0);
//     if (numberChoice) {
//         alert("Your number is positive.");
//     } else {
//         alert("your number is negative");
//     }
//
// }
//
// userInfo(choice());

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var string = "green";
function analyzeColor(string){
    if (string === "blue") {
        return ("Blue is the color of the sky.");
    }else if (string === "red"){
        return ("Strawberries are red.");
    }else if  (string === "cyan"){
        return ("Cyan is just weird.");
    }else {
        return ("Is that even a color?");
    }
}
console.log(analyzeColor(string));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(randomColor);
function rainbowColors(randomColor){
    if (randomColor === "red") {
        return ("Red is for roses.");
    }else if (randomColor === "orange"){
        return ("Orange is a fruit.");
    }else if  (randomColor === "yellow"){
        return ("Yellow is the color of the Sun.");
    }else if (randomColor === "green"){
        return ("Green is for grass");
    }else if  (randomColor === "blue") {
        return ("Blue is a beautiful sky.");
    }else if (randomColor === "indigo"){
            return ("Indigo is a cool word.");
    }else if  (randomColor === "violet"){
            return ("Violet is a shade of purple.");
    }else {
        return ("That is not a color of the rainbow.");
        }

}
console.log(rainbowColors(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

console.log(randomColor);
function rainbowColors(randomColor){
    switch (randomColor){
        //use break if not using return.
        case "red":
            return ("Red is for roses.");
        case "orange":
            return ("Orange is a fruit.");
        case "yellow":
            return ("Yellow is the color of the Sun.");
        case "green":
            return ("Green is for grass");
        case"blue":
            return ("Blue is a beautiful sky.");
        case "indigo":
            return ("Indigo is a cool word.");
        case"violet":
            return ("Violet is a shade of purple.");
        default:
            return (randomColor + " is not a color of the rainbow.");
    }

}
console.log(rainbowColors(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt ("Please enter a color.");
// function rainbowColors(userColor){
//     switch (userColor){
//         //use break if not using return.
//         case "red":
//             alert ("Red is for roses.");
//             break;
//         case "orange":
//             alert ("Orange is a fruit.");
//             break;
//         case "yellow":
//             alert ("Yellow is the color of the Sun.");
//             break;
//         case "green":
//             alert ("Green is for grass");
//             break;
//         case"blue":
//             alert ("Blue is a beautiful sky.");
//             break;
//         case "indigo":
//             alert ("Indigo is a cool word.");
//             break;
//         case "violet":
//             alert ("Violet is a shade of purple.");
//             break;
//         default:
//             alert (userColor + " is not a color of the rainbow.");
//     }
//
// }
// console.log(rainbowColors(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
 alert ("Your lucky number is " + luckyNumber);
var totalBill = prompt("What was you bill total?");


function calculateTotal(luckyNumber, totalBill) {
    switch (luckyNumber) {
        case 0 :
            alert("You must pay $" + totalBill);
            break;
        case 1 :
            alert("You must pay $" + (totalBill - (totalBill * 0.1)).toFixed(2));
            break;
        case 2 :
            alert("You must pay $" + (totalBill - (totalBill * 0.25)).toFixed(2));
            break;
        case 3 :
            alert("You must pay $" + (totalBill - (totalBill * 0.35)).toFixed(2));
            break;
        case 4 :
            alert("You must pay $" + (totalBill - (totalBill * 0.50)).toFixed(2));
            break;
        case 5 :
            alert("You must pay $" + (totalBill - (totalBill * 1)).toFixed(2));
            break;
    }
}
console.log(calculateTotal(luckyNumber, totalBill));
