// === Array Bonuses ===
//
// 1. Write a function called average(numbers) that takes in an array of numbers
// function average(numbers){
//     numbers.forEach(function(number){
//         return number;
//     });
//
// }

function average(array){
    for( var i = 0; i < array.length; i++ ){
        var sum = 0;
        sum += parseInt( array[i]);
    }
    var avg = sum/array.length
    return console.log("The sum of all the elements is: " + sum + " The average is: " + avg );
}
console.log(average([2, 4, 4, 6, 10]));

// 2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.
function sumAll(numbers){
    numbers.forEach(function(number){
        var sum = 0;
        sum += parseFloat(number);

    }return console.log(sum);
    // for (var i = 0; i < numbers.length; i++){
    //     var sum = 0;
    //     sum += parseFloat(numbers[i]);
    //
    // }
    // return console.log("Thee sum of " + numbers + " is " + sum)
}
sumAll([1, 5, 4]);
//
// 3. Write a function called max(numbers) that takes in an array of numberrs and returns the largest
//
// 4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest
//
// 5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order
//
// 6. Write a function called randomElement(array) that takes in an array and returns a random element
//
// 7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.
//
// 8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.
//
// 9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers
//
// 10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers