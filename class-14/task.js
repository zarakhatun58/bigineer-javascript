
//letter grade

// user input marks
// a+ 80 -100
//a 70 -79

var num=parseFloat(prompt("Enter Marks :"));


if(num >= 80 && num <100){
    document.write(" grade = A+" +"<br/>")
   //console.log("A+");
}
 else if(num >=70){
    document.write("Grade = A" +"<br/>" );
   // console.log("A");
}
else if(num >=60 ){
    document.write("Grade = B" +"<br/>" );
   // console.log("A");
}
else if(num >=50 ){
    document.write("Grade = c" +"<br/>" );
   // console.log("A");
}
else if(num >=40 ){
    document.write("Grade = d" +"<br/>" );
   // console.log("A");
}
// else if(num <40){
//     document.write("Grade = fail" +"<br/>" );
//    // console.log("A");
// }
else{
    document.write("Grade = fail" +"<br/>" );
}