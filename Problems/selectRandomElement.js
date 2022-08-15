//How to select Random element

let fruits=["apple", "Guava", "Orange", "Mango", "Tomato"];
let index=Math.floor(Math.random() *fruits.length);

console.log(fruits[index]);

// How to Reverse a String

// var CodeClash= "CodeClash";
/*
const reverse=(s)=>{
    return s.Split("").reverse().join("");
}
reverse(CodeClash);
*/

// How to get current Times
let d= new Date();
let now =`${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

console.log(now);

// How to replace part of a string
let str =" I love my Religion";
let text= str.replace("I", "We");

console.log(text);

/*
//How to get Current url
const currentUrl=()=>window.location.href;

currentUrl();
*/

//How to play audio with Javascript

var audio=new Audio('fun.mp3');
audio.play();

