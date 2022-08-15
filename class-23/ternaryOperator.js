
var number=Number(prompt("Enter number :"));

/*
if( number % 2 ==0 ){
    console.log("positive");
}
else{
    console.log("negative");
}
*/
// ternary operator 
/*
var result = number > 0 ? "positive" :" Negative";
console.log(result);

number % 2 ==0 ? console.log("positive") :console.log(" Negative");
*/

// normal if else 
/*
if( number >0){
    console.log("positive");
}
else if( number <0){
    console.log("negative");
}
else{
    console.log("Zero");

}
*/
// 3 te modye difference
var result = number >0 ? "positive " : number <0 ? "negative" : "zero";
console.log(result);


