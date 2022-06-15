var number1 = prompt("first number :");
var number2 = prompt("second Number :");

var add, sub, multiply, division, reminder;

 number1=parseInt(number1, 10);
 number2=parseInt(number2, 10);

add =number1 + number2;
//document.write("add =" + add + "<br/>");
document.write(number1 + "+" + number2 + "=" + add +"<br/>");

sub=number1 - number2;
//document.write("sub =" + sub + "<br/>");
document.write(number1 + "-" + number2 + "=" + sub+"<br/>");

multiply=number1 * number2;
//document.write("multiply =" +multiply + " <br/>");
document.write(number1 + "*" + number2 + "=" + multiply+"<br/>");

division =number1 /number2;
//document.write("division =" +division + "<br/>");
document.write(number1 + "/" + number2 + "=" + division+"<br/>");

reminder = number1 % number2;
//document.write("reminder =" +reminder );
document.write(number1 + "%" + number2 + "=" + reminder);



