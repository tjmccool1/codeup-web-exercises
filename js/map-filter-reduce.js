"use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

// users.filter(function(user){
//     if(user.languages.length > 2){
//         console.log(user);
//     }
// });
let filtered = users.filter( (user) => user.languages.length > 2 );
let mapped = users.map( (user) => user.email );
let reduced = users.reduce( (user, { id, name, email, languages }) => {
    user[id] = {name, email, languages};
    return user;
}, {});

console.log(filtered, mapped, reduced);
