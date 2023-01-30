//---------//
// Strings //
//---------//
console.log("Strings");

// 1. Make all countries in the following array follow the same formatting:
//    The first letter should be upper case, the rest lower case. Print the
//    result to the console.

var countries = ["AustraliA", "greece", "PERU", "ChInA"];

var countires = countries.toLowerCase();
for (i = 0; i < countries.length; i++) {
  countires[i] = countires[i].charAt(0).toUpperCase() + countries[i].slice(1).toLowerCase();
  }

// 2. Get every second and third letter from each country and concatenate them.
//    Print the results to the console.
var countriesList = countries.toString();
var twoThree = countriesList.slice(2,4);

console.log(twoThree);

// 3. In the sentence below replace 'dart' with 'arrow' by using the indexOf
//    and slice functions.

var sentence = "Time flies like an dart; fruit flies like a banana.";

var index = sentence.indexOf("dart");
var newSentence = sentence.slice(0,19) + "arrow" + sentence.slice(23);
console.log(newSentence);

// 4. Find the index of the last occurrence of flies in sentence.

var fliesLast = sentence.lastIndexOf("flies");

console.log(fliesLast);

// 5. Prompt the user for a string, reverse it, and show the result to the user.

var str = prompt("Write something", "something");
function reverseString(str) {
    var splitString = str.split("");

    var reverseArray = splitString.reverse();
 
    var joinArray = reverseArray.join("");
}
 
reverseString(str);



//---------//
// Numbers //
//---------//
console.log("Numbers");

// Use the following variable to answer the next questions.

var value = 13.3;

// 1. Round the value using normal math rules.

var roundNum = Math.round(value);
console.log(roundNum);

// 2. Round the value up.
var roundUp = Math.ceil(value);
console.log(roundUp);

// 3. Round the value down.

var roundDown = Math.floor(value);
console.log(roundDown);

// 4. Simulate a coin flip by generating a random number. Assume the coin is
//    fair and print the result, heads or tails, to the console.

var flip = Math.random();
var coin = (flip * 2) + 1;
var result = Math.floor(coin);

console.log(result);


//-------//
// Dates //
//-------//
console.log("Dates");

// 1. Prompt the user for their age and proceed to show in what year they
//    were born (you can assume they already had their birthday in the current
//    year).

// 2. Make a program that does the following: (1) Use a prompt to obtain the
//    birth year of the user. (2) Use a prompt to obtain the birth month of
//    the user. (3) Use a prompt to obtain the birth day of the user.
//    (4) Calculate how old the user is in days. (5) Show the result to
//    the user.
