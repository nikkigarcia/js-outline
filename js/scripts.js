// Numbers
// numbers and be computed with +, -, *, /, %, ++ increment, -- decrement
// NaN means Not a Number
var pizza = 5;
var soda = 1;
var bread = 3;

var total = pizza + soda;

console.log(total);

/**
 * The console. log() is a function in JavaScript which is used to print any kind of variables defined before in it or to just print any message that needs to be displayed to the user.
 */

// String

const name = 'Nikki Garcia';

const welcome = "Welcome to Geekwise Academy";



console.log(name);
console.log(welcome);

// Array
var fruits = ['apples', 'grapes', 'oranges', 'bananas'];
var rockBand = ['Pantera', 'Jonas Brothers', 'Tool', 'Nickleback'];

console.log(fruits);
console.log(rockBand);

// Object

var car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};

console.log(car);

// Boolean
// everything with a real value is true 0, null, undefined is false
// comparison operators always return true or false ==, ===, !=, !==, !===, <, >, <=, >=, && AND, || OR, ! NOT

const present = true;
const absent = false;

Boolean(present);
console.log(present);

// Undefined

var cat = "jim's";
console.log(cat);

// Null
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
person = null;    // Now value is null, but type is still an object

console.log(person);

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// command question mark is a single line comment

/*
This is
a multiline
comment
anyting between the foward slash and astrick is a multiline comment
*/

// document.write(); will display variable on webpage

document.write('Hello World!');

var favoriteMovie = 'My favorite movie is Bruce Almighty';
document.write(favoriteMovie);

// async remembers variables and remembers functions and variables

/**
 * The 'this' keyword refers to the current object.
Note that this is not a variable. It is a keyword, and its value cannot be changed.
 */

// Event Listeners
var quote = document.querySelector("#quote"); 
var prev = document.querySelector("#prev"); 
var newQuote = document.querySelector("#next");
var n = 0;
var quoteList = [
"Slow progress is better than no progress", 
"If you cannot accept it, change it. If you cannot change it, accept it", 
"Your time is limited. So, don't waste it living some else's life" 
];

var backquote = quoteList.reverse; 

// newQuote.addEventListener("click", function(){

//   if (n < 100) {
//   quote.textContent = quoteList[n];
//   n++;
//   } else {
//     quote.textContent = quoteList[n];
//     n = 0;}
// });
// prev.addEventListener("click", 
//                       function() { 
//   if (n<100) { 
//     quote.textContent = quoteList[n]; 
//     n--; } 
//   else { 
//     quote.textContent = quoteList[n]; 
//     n = 0;} 
// });




//  for loops

 var textMessages = ['wyd', 'xmas shopping', 'do you want to meet for dinner?', 'yea lets go to Panda'];
 var i;

 for(i=0; i<textMessages.length; i++){
     console.log(textMessages[i]);
 }

var groceries = ['bread', 'eggs', 'water', 'bacon'];
var x;

for (x of groceries) {
  console.log(x);
}

// The while loop loops through a block of code as long as a specified condition is true.
var i = 0;
while (i < 10) {
    console.log("The number is " + i);
    i++;
  }
// dowhile loop
var i = 0;
do {
  console.log ("This number is " + i);
  i++;
}
while (i < 5);

// Built-in Objects: date, math, string, array

// example of the date object
var today = Date();
console.log("Today's date is: " + today);

var dt = new Date("January 7, 2020");
console.log("getDate() : " + dt.getDate() );
console.log("getMonth() : " + dt.getMonth() );

// exmaple of math object

var value = Math.exp(5);
console.log(value);

var value2 = Math.round(0.5);
console.log(value2);

var value3 = Math.sqrt(25);
console.log(value3);

// try -4...is NaN = not a number

// example of a string object

// .length, .toUpperCase() 

var str = new String('How long do you think this string is?');
console.log(str.length);
console.log(str.toUpperCase() );

// Yes, it counts the spaces in between the words as characters

// example of an array object

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
console.log(colors[0]);

/**
 * .pop: removes the last element from an array and returns that element
 * .shift: removes the first element from an array and returns that element
 * .push: Adds one or more elements to the end of an array and returns the new length of the array
 * .reverse: reverses the order of the elements of an array
 */

 var time = 8;

 var str = "hello my name is Nikki";

 var cars = [911, 'ford f150', 'm3', 'gtr'];

 let person = {
   name: "Nikki",
   age: 31,
   hair: "brown",
   eyes: "brown"
 };
 console.log(person.name);



