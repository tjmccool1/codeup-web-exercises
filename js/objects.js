(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstname: "Thomas",
        lastname: "McCool",
        // sayHello: function(){
        //     return ("Hello " + person.firstname + " " +  person.lastname)
            // }
        }


    console.log(person);
    console.log(person.firstname);
    console.log(person.lastname);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return ("Hello " + person.firstname + " " +  person.lastname)
    }

    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    console.log(shoppers);
    function discount(array) {
        array.forEach(function(shopper){
            if (shopper.amount >= 200){
                return document.write("<p>" + shopper.name + "  spent $" + shopper.amount + " apply 12% discount for a total of $" + (shopper.amount-(shopper.amount * 0.12) + "</p>"));
            }else{
                return document.write("<p>" + shopper.name + " spent $" + shopper.amount + " Sorry, no discount." + "</p>");
        }
        });
    }
    discount(shoppers);
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title:"The Adventures of Sherlock Holmes",
            author: {
                firstname:"Authur Conan",
                lastname:"Doyle"
            }
        },
        {
            title:"Norse Mythology",
            author: {
                firstname:"Neil",
                lastname:"Gaiman"
            }
        },
        {
            title:"American Assassin",
            author: {
                firstname:"Vince",
                lastname:"Flynn"
            }
        },
        {
            title:"Blood Infernal",
            author: {
                firstname:"James",
                lastname:"Rollins"
            }
        },
        {
            title:"Use of Force",
            author: {
                firstname:"Brad",
                lastname:"Thor"
            }
        },
        {
            title:"The Recruit",
            author: {
                firstname:"L.T.",
                lastname:"Ryan"
            }
        }
    ];


    // console.log(books);
    // console.log(books[5].title);
    // console.log(books[5].author.firstname);
    // console.log(books[5].author.lastname);
    //
    // console.log(books);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
     //-------------this------------
    for(var i = 0; i > books.length; i++) {
        console.log("book# " + (i += 1) + "\n");
        console.log("title" + books[i].title + "\n");
        console.log("title" + books[i].author.firstname + " " + books[i].author.lastname + "\n");
        console.log("-------------" + "\n");
    }
// --------- or this---------
    books.forEach(function(book,index){

        var output = "";
        output += "book# " + (index + 1) + "\n";
        output += "title: " + book.title + "\n";
        output += "author: " + book.author.firstname + " " + book.author.lastname + "\n";
        output += "-----------" + "\n"
        console.log(output);
// ---------- or  this -------------
      //  return document.write("Book #" + (index += 1) + "<br>" + "Title: " + book.title  + "<br>" + "Author: " + book.author.firstname +" "+ book.author.lastname + "<br>" + "-----------" + "<br>")
    });


    /**
     * Bonus:todo
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    // Function to create a book object
    function createBook(title, author) {
        var nameArray = author.split(" ");
        var firstName = nameArray[0];
        var lastName = nameArray[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
    }


    // Create books array using calls to createBook() function
    var books = [
        createBook("1984", "George Orwell"),
        createBook("The Lord of the Rings", "J.R.R. Tolkien"),
        createBook("R is for Rocket", "Ray Bradbury"),
        createBook("The Lost World", "Michael Crichton"),
        createBook("The Shining", "Stephen King")
    ];

    console.log(books);


    // Create function to showBookInfo()
    function showBookInfo(book, index) {
        var output = "Title: " + book.title + "\n";
        output += "Author: " + book.author.firstName + " " + book.author.lastName  + "\n";
        output += "---";
        return output;
    }

    // Use showBookInfo() to log book objects using forEach loop
    books.forEach(function(book, index) {
        console.log("Book # " + (index + 1) + "\n");
        console.log(showBookInfo(book));
    });

//-----------------My Try====================================
    // books.createBook = function(title, author) {
    //     this.title.push(title);
    //     this.author.firstname.push(author.split("|").indexOf([1]).join(""));
    //     this.author.lastname.push(author.split("|").indexOf([-1]).join(""));
    //
    // }
    // books.forEach(books.createBook("American Assassian", "Mitch Rapp")(book, index){
    //     return document.write("Book #" + (index += 1) + "<br>" + "Title: " + book.title  + "<br>" + "Author: " + book.author.firstname +" "+ book.author.lastname + "<br>" + "-----------" + "<br>")
    // });
    // books.showBookInfo = function(bookUserWants) {
    //     var bookUserWants;
    //     books.forEach(function(book,index){
    //         if (book = bookUserWants){
    //         return document.write("Your book is Book #" + (index += 1) + "<br>" + "Title: " + book.title  + "<br>" + "Author: " + book.author.firstname +" "+ book.author.lastname + "<br>" + "-----------" + "<br>")
    //     }
    // }
    //     );
    // books.showBookInfo("Blood Infernal");
})();

