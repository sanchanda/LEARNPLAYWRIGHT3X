//Different ways of creating Array

//Type 1
// Array literal (preferred)

let browsers = ["Chrome", "Firefox", "Safari"];

//Type 2
// Array constructor
let scores = new Array(3); // creates [empty x 3]
scores[0] = "1";

//Type 3
let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]


let numbers = new Array(100, 200, 300, 400);

//Type 4
let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);

//Type 5
// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]

console.log(chars);


let num1 = new Array(3);
num1[0] = 0;
let num2 = new Array(1, 2, 3, 4);
let num3 = Array.of(1, 2, 3, 4, 5);
let num5 = Array.from("santosh");

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num5);