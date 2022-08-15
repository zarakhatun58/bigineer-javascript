// task - 5 --- letter or consonant using switch

var letter = prompt("Enter a letter :");

letter = letter.toLowerCase();

// switch (letter) {
//     case "a":
//         console.log("vowel");
//         break;

//     case "e":
//         console.log("vowel");
//         break;
//     case "i":
//         console.log("vowel");
//         break;
//     case "o":
//         console.log("vowel");
//         break;

//     case "u":
//         console.log(vowel);
//         break;

//     default:
//         console.log("consonant");



// }

switch (letter) {

    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("vowel");
        break;
    default:
        console.log("consonant");

}