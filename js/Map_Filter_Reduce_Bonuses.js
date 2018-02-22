
const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];


// PROBLEM 1 - create an array of the first letters of each fruit
   let firstLetter = fruits.map((fruit) => fruit.charAt(0));
console.log(firstLetter);

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
//first try|||||\\\\\\\\\\\
// let usersArray = customers.reduce( (customer, { name, age}) => {
//
//     customer = {name, age};
//     return customer;
// }, {});
//second try||||\\\\\\\\\
const usersArray = customers.map(({ name, age }) => {
    let user = {};
    user.name = name;
    user.age = age;
    //customer = {name: customer.name, age: customer.age};
    // customer ={age: customer.age};
    return user
})
console.log(usersArray);
// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
// const civilServants = customers.filter((user) => {
//     return user.occupation == 'Teacher' || user.occupation =='Police Officer'
//
// });

const civilServants = customers.filter(({ occupation}) => {
    return occupation == 'Teacher' || occupation =='Police Officer'

});
console.log(civilServants);

// PROBLEM 4 - determine the average age of customers
            
const avgAge = customers.reduce((accum, { age }) => {
    return accum += age
}0)
console.log(avgAge);


//            PROBLEM 1 HINT - use .map()






















//            PROBLEM 2 HINT - use .map()
















//            PROBLEM 3 HINT - use .filter()


















//            PROBLEM 4 HINT - use .reduce()


