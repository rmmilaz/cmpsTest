<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CMPS 162: Module 2 Programming Project</title>
<style>* { font-family: monospace; }</style>
<script>
 
 // NOTE: You can enter both code and explanations. For an explanation, start
    //       the line with '//' which indicates a comment.
    
    // NOTE: console.log prints text to the browser console that you can enable
    //       to see the output. It is a little bit more convenient than alert so
    //       we will use it most of the time.
    
    
    
    //-----------//
    // Prompts //
    //-----------//
    prompt(variablename);
    
    // 1. Create a string variable that uses a prompt that asks the customer for his/her name
    var name = prompt("Please state your full name");
    
    // 2. Write the value from #1 in the Console
    console.log(name);
    
    // 3. Create a conditional statement that validates if the user has not input a name from #1, provide an alternate message.
    if (name == ""){
        console.log("name not found");
    }
    
    
    //--------//
    // Concatentate Strings //
    //--------//
    console.log("Values");
    
    
    //1. Take "23" and " Michael Jordan" and concatenate the strings together to create one
        var jersey = "23";
        var player = "Michael Jordan";
        var mj = jersey + player; 
    //2. Create a concatenate string , and with the first input as "Hello" & second input as "Your name", but use a prompt to input your name
    //.  output the concatenate string on the screen
    //.  Example; Hello Michael Jordan
    var greeting = prompt("What is your name?");
    
    
    //------------------------------------------------ //
    // COMPARISON OPERATORS and CONDITIONAL STATEMENTS //
    //-------------------------------------------------//
    console.log("Comparison Operators");
    // 1. Show how you would validate that xyz equals 45, input the code below xyz value
          xyz = 45;
          if (xyz == 45){
            console.log("Correct value");
          } else {
            console.log("Incorrect value");
          }
    // 2. Create a conditional statement if the value is either < or > (start is greater than end and end is greater that start)
          var start = 500;
          var end = 400;
          
          if (start > end){
            console.log("Start is greater than end");
          } else if (end > start) {
            console.log ("End is greater than start");
          } else {
            console.log("Both values are the same");
          }
    
    // 3. Provide an conditional statement with an else statement. Create an input prompt that inputs a new score
    //.   Score is 45, validate that 45 is greater or equal to the value that was entered in the input prompt, else provide an alternative answer
          var score = prompt("What is your score?");
          if (score >= 45) {
            console.log("That was the correct score of the game");
          } else {
            console.log("That was not the correct score of the game");
          }
    
      //------------------------------------------------ //
    // ARRAYS //
    //-------------------------------------------------//
    
      //1. Setup an array to hold 5 objects, provide 5 different places that you enjoy traveling to
      var vacation = ["Frida Harbor", "Finger Lakes", "Colorado", "Geneva", "Argentina"];
      
      //2. Output in the Console the array values used in #1
      console.log(vacation);
      
      //3. Use the pop function on the array and output the array list
      console.log(vacation.pop);
      
      //4. Use the shift function on the array and output the array list
      console.log(vacation.shift);

      </script>
</head>
<body>
  See console!
</body>
</html>
