var letter =prompt("Enter letter :");

letter =letter.toLocaleLowerCase();

if( letter =="a" || letter =="e" || letter =="i" || letter == "o" || letter =="u"){
    console.log("vowel");
}

else {
    console.log("consonant");
}