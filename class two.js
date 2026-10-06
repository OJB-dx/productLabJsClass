// Data Types, Comments, Variables ... in JavaScript

// let age = 20;

// let name = "Victory Oluchukwu Ojugba"

// console.log(age);
// console.log(name);

// Data Types
/*
Common Data Types include 
- Integer
- String
- Boolean

Data types matters because the computer would like to know kind of data it's working with.

*/

// isAlive = true; //Boolean (true/false) 

// Example 
// let x = 20;
// let y = 50;

// console.log(x + y);

//About String Concatenation:
// In JavaScript, you can concatenate both string and int or float and the output will be combined as strings
// Example
// let x = 20;
// let y = "50";

// console.log(x + y);

/*
Operators in JavaScript

Arithmetic
+
-
*
/

Comparism
>
<
>=
<= 	
=== is equal to

*/

//let x = 20;
//let y = 50;
//let sum = x + y;
//let product = x * y;

// console.log("The sum is:", sum);
// console.log("The product is:", product);

// let comparison = x > y;

// console.log(comparison);

// Making decisions with IF
/*
let score = 23;

if (score > 50) {
	console.log("Passed");
	console.log("Welcome to the new class");
}else {
	console.log("You have failed again");
}
*/

// Assignment: Reasearch on if, elseif, else and switch

// FOR LOOP
for (let i = 0; i < 10; i++){
	console.log(i);
}
console.log("Second code")

// The above code is same as 
for (let i = 0; i<=10; i=i+1){
	console.log("iteration", i);
}
console.log()
for (let i = 0; i<=10; i=i+3){
	console.log("iteration", i);
}


/* Code Explanation
for --- for Loop
let i = 0;  --- Variable creation/initialization
i++, i=i+1, i=1+2, ... --- Increment
*/

//WHILE LOOP:
// while(){}
console.log();
let x = 0;
while (x<=10){
	 console.log("iteration",x);
	 x++;
}

// DO WHILE
// do{}while()
	


// Function: A Reusable block of code
function greeting(){
	console.log("Hello, Welcome to JavaScript")
}
greeting()

function greetings(name){
	console.log("Hello", name)
}
greetings("Victory Oluchukwu")