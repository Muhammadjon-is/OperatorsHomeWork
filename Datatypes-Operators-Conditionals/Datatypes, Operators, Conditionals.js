/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE 
 !1. 😅 Boolean (Logical type)=> The booleran type has only two values: true(yes, correct) and false(no, incorect) 
 !2. Number => there are many operations for numbers, e.g multiplication(*), divison(/), addition(+), subtraction(-)
 !3.String => A string in JavaScript must be surrounded by quotes. There are 3 types of quotes. Double , single, backticks.
 !4.Null => It’s just a special value which represents “nothing”, “empty” or “value unknown”. (let age = null).
 !5. Undefined => The meaning of undefined is (value is not assigned).
 !6. Object => objects are used to store collections of data and more complex entities.
*/

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE 
 ! The Variable is a (named storage) for a data. To create a  new variable in JS keywords => let, var const
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE
let a = 12 
let b = 20 
 console.log(" result `${a}` + `${b}`")
*/

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE 
!let x = 12 

*/

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE 
 let name = "John Doe"
*/

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

/* WRITE YOUR ANSWER HERE
    let a = 50 
    let b = 12 
     let c =  a - b 
      console.log(c)
*/

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

/* WRITE YOUR ANSWER HERE
  let name1 = 'john'
  let name2 = "John"
   
   if(name1 != name2){
    console.log("name 1 ");
   }else{
    console.log("name2");
   }
  */ 



/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE 
 let x = 6;
  if (x = 5){
    console.log("it's five ")
  } else {
    console.log("it's six")
  }
*/

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE 
finction getIt(areWe) {
    return (areWe ? "200$" : "10000$" )
}
consloe.log(getIt(true))
! expected outpu "200$"
consloe.log(getIt(false))
! expected outpu "10000$"
consloe.log(getIt(null))
! expected outpu "10000$"
 let r = 12 
   
  
*/
