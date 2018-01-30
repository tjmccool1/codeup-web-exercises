///while loop

(function () {

    var i = 1;
    while (i <= 65536){
        console.log(i)
        i *= 2;
    }

    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;

    // This expression will generate a random number between 1 and 5
    //Math.floor(Math.random() * 5) + 1;
    // console.log(allCones);


    console.log("Starting with " + allCones);
    do{
        var sold = Math.floor(Math.random() * 5) + 1;

        console.log("I have " + allCones + " Cones left.");
        console.log("I would like to buy " + sold);
        if(allCones < sold){
            // return
            console.log("Sorry, I cannot sell you " + sold + " cones, I have " + allCones + " left");
            break;

        }else{
            console.log();
        }
        allCones -= sold;
    }while (allCones > 0){
        if (allCones === 0){
            console.log("Yay! I sold them all!");
        }else{
            console.log("May be next time.")
        }
    }








})();