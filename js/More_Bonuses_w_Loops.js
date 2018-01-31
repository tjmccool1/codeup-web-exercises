    var num = 99;
    for(var i = num; i < 1; --i){
        console.log(num + "bottles of beer on the wall");
        console.log("take one down and pass it around");
        num = num -= i;
    }

    console.log(num + "bottles of beer on the wall");
    console.log("take one down and pass it around");