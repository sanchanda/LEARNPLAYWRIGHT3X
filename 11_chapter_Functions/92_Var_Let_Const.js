var a = 10;
console.log(a); // 10
// Var - Function Scoped(), Traitor

// Define
function printHello() {
    console.log("Hello Santosh");
    var a = 20;
    console.log(a); // 20
    if (true) {
        var a = 30;
        console.log(a); // 30
    }
    console.log(a); //20

}

printHello();


// let - Block Scoped

let b = 20; // Global Scope
console.log(b); //  20

function printHello1() {
    console.log("Hello Santosh1 !");
    let b = 30; // Local Scope
    console.log(b); // 30
    if (true) {
        let b = 5;
        console.log(b); // 5
    }
    console.log("let ->", b);   // 30
}

// Calling of the function
printHello1();
console.log(b);

// Let does not allow you to have a re-declaration. 
// let a = 10;
// let a = 10;


// var allow you to have a re-declaration 
var a = 11;
var a = 100;

// let nn = "Santosh";
// var nn = "Santosh1"; //Throws error as let in previous line does not allow you to have a re-declaration.

const pi = 3.14;
console.log(pi);
//pi = 3.14159; // Assignment to constant variable throws an error.



const a1 = [1, 2, 3];
a1.push(10);
