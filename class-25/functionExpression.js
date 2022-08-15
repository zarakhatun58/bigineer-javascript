//IIFE , immidiate call  kora bojai , alada kore arr function call korte hobe na 

(function display(){
    console.log("Hello");

})();

(function displayMessage(){
console.log("hello........");

})()


// function expression
var displaySub= function displayFull(msg){
    console.log(msg);

}
displaySub(" i am jahanara ");

// add

var addNumber =function total(a,b){
    var sum= a+b;
    document.write(" sum ="+ sum+ "<br/>")
}
addNumber(4,5);
console.log(4,5)




