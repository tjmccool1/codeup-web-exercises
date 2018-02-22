// Given the following array...

const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
        {
        name: "Summer",
        gender: "female",
        age: 10,
    },
        {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];

// complete the bonuses below...
//
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
const totalAge = family.reduce((accum, person) => {
    return accum += person;

}, 0);
console.log(totalAge);
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and ages
// const output = family.reduce((accum, person) => {
//     if (typeof accum.names === 'undefined'){
//         accum.names = [];
//     }
//     if (typeof accum.ages === 'undefined'){
//         accum.ages = [];
//     }
//     if (typeof accum.genders === 'undefined'){
//         accum.genders = [];
//     }
//     accum.names.push(person.name);
//     accum.ages.push(person.age);
//     accum.genders.push(person.name);
//
// },{});
const output = {
    names:family.map(obj => obj.name),
    ages:family.map(obj => obj.age),
    genders:family.map(obj => obj.name)
}
console.log(output);