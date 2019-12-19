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
var prev= document.querySelector("#prev"); 
var newquote = document.querySelector("#next");
var n = 0;
var quotelist = [
"Slow progress is better than no progress", 
"If you cannot accept it, change it. If you cannot change it, accept it", 
"Your time is limited. So, don't waste it living some else's life", 
"The bridge between dream and reality is work!!", "Everything is hard before it is easy", "Everybody likes a compliment", 
"Never ever give up!!", "In this fast world, the best way to survive is not be emotionally atteched with anyone",
"Never compare yourself with anybody. With this, you are insulting yourself", "Have a courage to follow your heart and intuition because they somehow already know what you truely want to be. Everything else is secondary", "Be emotionless", "Start small, do big", "Impossible, baby, is nothing", "Obsession is necessity", "Understand that you are an uncommon breed", "Kill your fear otherwise your fear will kill you", "Sometime life will throw a brick on your head. But, don't lose faith", "Be the best, \n, fuck the rest", "Smile! It confuses your enemy", "All will be willing to be your friend when you hve something they want", "They watch, /n They hate, /n They copy!", "The goal is not to live forever, it is to create that will"];

var backquote = quotelist.reverse; 

newquote.addEventListener("click", function(){

  if (n < 100) {
  quote.textContent = quotelist[n];
  n++;
  } else {
    quote.textContent = quotelist[n];
    n = 0;}
});
prev.addEventListener("click", 
                      function() { 
  if (n<100) { 
    quote.textContent = quotelist[n]; 
    n--; } 
  else { 
    quote.textContent = quotelist[n]; 
    n = 0;} 
});




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