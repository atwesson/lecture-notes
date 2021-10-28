
// ! CONDITIONALS

/* A falsy value is a value that is considered false when encountered in a Boolean context.
There are 6 falsy values in JS:
- false
- 0
- "", '', ``
- null
-undefined
- NaN (not a number)

What does this mean? Whenever JS is expecting a Boolean value and it returns one of 6 values, it is evaluated as "falsy".
*/

/*
! IF

? When utilizing comparison operators, we typically are asking so we can move on to the next batch of of code. "IF" something is true, do "this thing".
*/

let test = [];
let test1 = 0;
let test2 = 1;
let test3 = null;
let test4 = undefined;
let test5 = NaN;
console.log(Boolean(test));
console.log(Boolean(test1));
console.log(Boolean(test2));
console.log(Boolean(test3));
console.log(Boolean(test4));
console.log(Boolean(test5));


let light = "on";

if (light == "on") {
    console.log("The light is on");
}

let weather = 65;
if (weather < 70) {
    console.log("Consider wearing a jacket");
}

/* SYNTAX
if (conditional){
true
}*/

if (true) {
    console.log("Works");
}

/* Understanding how our comparison operators are functioning can help us ask questions to produce results we are wanting. If the weather is less than 70 degrees outside, we may want to be instructed to wear a jacket. 

? What if we wanted to make sure two things were true inside our if statement?
*/

//Chalenge

let rain = true;

if (weather < 70 && rain != false) {
    console.log("It is a little chilly and will possibly rain.");
}
let batman = 'is the night';
let bruce = true;

if (bruce == true && batman == 'is the night') {
    console.log(batman);
}
IF / ELSE challenge
//! CHALLENGE
/*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
    Silver:
    If It is your name, console log 'Hello, my name is <name>'
    Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

let name = "andy";

if (name == 'andy') {
    console.log("Hello, my name is " + name + ".")

} else {
    console.log("Hello, is your name " + name + "?")

}

/**
 * !TERNIANIES
 * Quick if else
 */

let firstName = "Andy";

firstName == "Andy" ? console.log(firstName) : console.log("who is you?");
/**
 * ! SWITCH
 */

let grade = "A";

switch (grade) {
    case "A":
        console.log("You got an A!");
        break;
    case "B":
        console.log("You got an B!");
        break;
    case "C":
        console.log("You got an C!");
    case "D":
        console.log("You got an D!");
        break;
    default:
        console.log("You got an F!");
}





