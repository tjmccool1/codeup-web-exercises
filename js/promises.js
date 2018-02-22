

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num) {
                resolve(`I'm done!`);
            } else {
                reject(`Error!`);
            }
        }, num);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));


//fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

// Create a function that accepts a github username, and returns a promise that resolves with the date of the last commit that user made. Reference the github api documentation to achieve this.

// function getCommits(username) {
//
//     let gitHub = fetch( `https://api.github.com/users/${username}/events`, { headers: { 'Authorization': 'aebb4ad9023b4aeeb1b276291b8365b6dd5656cf' } } );
//
//     gitHub.then( (response) => {
//         response.json().then( (response) => {
//             let gitHub = response.filter( (v) => v.type === 'PushEvent' )[0];
//             console.log( `${username}'s Last Commit: "${gitHub.payload.commits[0].message}" at ${gitHub.created_at}` );
//         });
//     });
//
//     gitHub.catch( (response) => {
//         console.log(response);
//     });
// }
//
// getCommits('tjmccool1');

//3rd aebb4ad9023b4aeeb1b276291b8365b6dd5656cf

// 2nd 96efdd0eed782d6ea85ae0afbc17f33649bd0f1f

//1st  68a73410bba48addaa580a58aa35d12a117f84dc

// function githubCheck() {
//     const gHPromise = fetch('https://api.github.com/users', {headers: {'Authorization': 'aebb4ad9023b4aeeb1b276291b8365b6dd5656cf'}});
//     return gHPromise;
// }
//
// console.log(githubCheck());

function gitLastCommit(username) {
    let dates = [];

    fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {headers: {'Authorization': '68a73410bba48addaa580a58aa35d12a117f84dc'}})
        .then(response => response.json())
        .then(repositories => {
            repositories.map(repo => {
                dates.push(repo.updated_at);
            });
            console.log(dates);
            dates.sort();
            document.querySelector('span').innerText = new Date(dates[dates.length - 1]);

        });
}
gitLastCommit('tjmccool1');