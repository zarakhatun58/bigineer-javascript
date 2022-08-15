// IIFE er madhyme , immediate call kore add koro Task sum print korbe 

(function add(a,b){
    var result= a+b;
    document.write(" ADD =" + result +" <br/>")

})(30, 20);

// substraction

(function substruction(c,d){

    var result=c-d;
    document.write(" Substruction ="+ result +"<br/>")
})(50,30);

(function multiply(e,f){
    var result= e* f;   
    document.write(" Multiply =" + result+"<br/>")
})(7,8);

(function divide(g,h){
var result= g/h;
document.write("divide =" + result+ "<br/>");
})(60,10);

(function remainder(i,j){
    var result=i% j;
    document.write("remainder =" +result + "<br/>")
})(15,4)



