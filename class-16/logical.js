var num1 =prompt("Enter num1 :");

var num2 =prompt("Enter num2 :");
var num3 =prompt("Enter num3 :");


if( num1 > num2 && num1 > num3){
    console.log(" large number =" + num1);
}

else if( num2 >num1 && num2 >num3){
    console.log(" large number =" + num2);
}
else{
    console.log("large number =" + num3);
}