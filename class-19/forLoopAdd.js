// 1+2+3+4+ =

var sum=0;

// for(var x=1; x<= 10; x=x+1){
//  sum =sum+x;  // sum =1;
// }
// document.write(sum);
// document.write("<p> End</p>");
// from 10 to 20 sum 

// for (var x= 10; x<= 20; x=x+1){
//     sum =sum+x;
// }

// document.write(sum);
// document.write("<p> End</p>");

var number1=parseInt(prompt("Enter start number1 : "));

var number2=parseInt(prompt("Enter Number2 :"));

for(var x=number1; x<=number2; x=x+1){
    sum=sum+x;
}
document.write(sum);
console.log(sum);