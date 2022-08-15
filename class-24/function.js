


// function

function square(){
    var num =5;
    var result =num *num;
    
    document.write("Result = " +result +" <br/>");

}
// how to call function 
square();
square();

// 

function squares(num1, num2){
    var result =num1 * num2;
    document.write(" Result =" + result +" <br/>");

    
}
squares(5,6);

function multiply(num3, num4){
    var result =num3 * num4;   
return result;
    
}
/// call na kore return kora jai
//document.write(" multiply ="+ 50*20);
document.write(multiply(20,10)+ "<br/>");
// addd
function add(a,b){
    var result =a+b;
    return result;

}
document.write(add(8,7)+ "<br/>");
// minus
function sub( c,d){
    var result=c-d;
    return result;
}

document.write(sub(40, 6)+ "<br/>");

// divition

function division( e,f){
    var result= e /f;
    document.write(" division =" + result + "<br/>")
}
division(20,4);

function remainder(x,y){
    var result=x % y;
    document.write("remainder =" + result+ "<br/>");
}
remainder(50,4);








