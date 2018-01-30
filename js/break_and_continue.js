// break and continue


//var allCones = Math.floor(Math.random() * 50) + 50;

var input;
do{
    prompt("please inout a number between 1 -50");
}  while ((input > 50 || input < 1)|| isNaN(parseFloat(number)));
console.log("Number to skip is" + input)
for(var i = 1; i <= 50; i++)