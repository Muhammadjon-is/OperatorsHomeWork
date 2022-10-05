// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

/* WRITE YOUR ANSWER HERE
 let a = 8 
  if (){

  }
*/

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

/* WRITE YOUR ANSWER HERE 
  var x = 4;
  var y = 5;
  var z = 7;
 if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
*/

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

/* WRITE YOUR ANSWER HERE

var avg = [1,2,3,4].reduce((p,c,a) => p + c/a.length,0);
console.log(avg)
*/

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE 

var arr = [
  'first item',
  'second item is longer than the third one',
  'third longish item'
];

var lgth = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    var lgth = arr[i].length;
    longest = arr[i];
  }
}

console.log(longest);
*/

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

/* WRITE YOUR ANSWER HERE

var data = 20
if (data === parseInt(data, 10))
    alert("data is integer")
else
    alert("data is not an integer")
*/

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/* WRITE YOUR ANSWER HERE
! 
var number = 6
//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
*/
