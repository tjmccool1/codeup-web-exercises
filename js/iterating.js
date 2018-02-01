(function(){
    "use strict";

//     var shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
//     shapes.forEach(function(shape) {
//         console.log('Here is a lovely shape: ' + shape + '.');
//     });

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ['Thomas', 'Chiara', 'Joshua', 'Nicholas'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length + " names in the array.");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("The first name is " + names[0]);
    console.log("The second name is " + names[1]);
    console.log("The third name is " + names[2]);
    console.log("The fourth name is " + names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(var i = 0; i < names.length; ++i){
        console.log("for = The name at index " + i + " is " + names[i]);
    };
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name, index){
        console.log("forEach = The name at index " + index + " is " + name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    function first(array){
        if(Array.isArray(array)){
            return console.log("The first element in the array is " + array[0]);
        }
    }
    function second(array){
        if(Array.isArray(array)) {
            return console.log("The second element in the array is " + array[1]);
        }
    }
    function last(array){
        if(Array.isArray(array)) {
            return console.log("The last element is the array is " + array[array.length - 1]);
        }
    }
    first([1, 2, 3, 4, 5]); // returns 1
    second([1, 2, 3, 4, 5]); // returns 2
    last([1, 2, 3, 4, 5]);   // return 5
})();
