//-----------//
// Functions //
//-----------//
console.log("Functions");

// 1. Write a function named 'greet' that greets the user. The greeting should appear
//    in an alert or logged to the console. Make sure that you call it as well.
    function greet(){
        alert("Hello");
    }

    greet();


//

// 2. a. Write a function named 'sumAndPrint' that takes two numbers as parameters,
//    adds them together, and logs the result to the console.
//    b. Call the function passing in num1 and num2. 

function sumAndPrint(num1, num2){
    console.log("The sum is: " + num1 + num2);
}

sumAndPrint(5, 7);



// 3. a. Write a function named 'sum' that takes two numbers as parameters,
//    adds them together, and returns the result. 
//    b. Set the default value of both numbers to 0.
//    c. Call the function and log the result to the console.

function sum(num1, num2){
    num1 = 0;
    num2 = 0;
    
    console.log(num1 + num2);
}

sum(10, 6);


// 4. a. create a variable that contains an array of at least six different integers. 
//    b. Log your array variable to the console. 
//    c. Write a function named 'findSmallest' that finds the smallest number in
//    an array and returns the result. For example, the answer for [23, 54, 3, 6, 4, 46] 
//    should be the number 3. Note that the function should take an array as input data.
//    d. Call the function passing in the array you created in step 4.a and log the result 
//    to the console. 

var list = [7, 9, 13, 11, 5];
console.log(list);

function findSmallest(array){
    console.log(Math.min(array));
}

findSmallest(list);



// 5. a. create a variable that contains an array of at least six elements. 
//    b. Log your array variable to the console. 
//    c. Write a function named 'everySecondElement' that takes as
//    input an array and returns every second element in a new array. For
//    example, everySecondElement([1, 2, 3, 4, 5, 6]) should return [2, 4, 6].
//    Hint: one solution uses the % operator.
//    d. Call the function passing in the array you created in step 5.a and log the result.

//--------//
// Switch //
//--------//
console.log("Switch");

// 1. a. Create an empty variable called thisMonth.
//    b. Using JavaScript's buitl-in Date object, set the thisMonth variable to the current month's 
//    numerical value. 
//        Note: Find the Date object methods at https://www.w3schools.com/jsref/jsref_obj_date.asp
//        Note: Step a and step b can actually be combined into a single expression.
//    c. Code a JavaScript switch statement that accepts the thisMonth variable as the argument. The 
//    case statements should log the name of the month to the console.
//        e.g., if the thisMonth variable contains the number 1, then the word 'February' should be 
//        logged to the console. 

var thisMonth;

thisMonth = new Date().getMonth();
console.log(thisMonth);

switch(thisMonth){
    case 0:
        thisMonth = "Janurary";
        break;
    case 1:
        thisMonth = "Februrary";
        break;
    case 2:
        thisMonth = "March";
        break;
    case 3:
        thisMonth = "April";
        break;
    case 4:
        thisMonth = "May";
        break;
    case 5:
        thisMonth = "June";
        break;
    case 6: 
        thisMonth = "July";
        break;
    case 7:
        thisMonth ="August";
        break;
    case 8:
        thisMonth = "September";
        break;
    case 9:
        thisMotnh = "October";
        break;
    case 10:
        thisMonth = "November";
        break;
    case 11:
        thisMonth = "December";
        break;

}

console.log(thisMonth);



//-------//
// While //
//-------//
function factorial_for(n) {
  var total = 1;
  for (var i = 1; i <= n; i++) {
    total *= i;
  }
  return total;
}

console.log(factorial_for(9));

console.log("While");

// 1. a. Create a factorial_while function that uses a while loop but otherwise
//    returns the same results as the factorial_for function above.
//    b. call your factorial_while function passing in the number 9 as the argument
//    and log the result to the console.

function factorial_while(n) {
    var total = 1;
    while(total <= n){
        total = n * total;
        n = n + 1;
    }
}

console.log(factorial_while(3));



//----------//
// Do-While //
//----------//
console.log("Do-While");

// 1. a. Create a factorial_do_while function that uses a do while loop but otherwise
//    returns the same results as the factorial_for function above.
//    b. call your factorial_do_while function passing in the number 9 as the argument
//    and log the result to the console.

function factorial_do_while(){
    var num = 9;
    do while(num == 9){
        console.log("the number is 9");
    }
}
