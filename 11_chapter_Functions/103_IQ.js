greet("Alice");

function greet(name) { // best practice is to declare function in the top .
    //  in this case you don't get error because of hoisting
    console.log('Hi');
    return `Hello, ${name}!`;
}

sayHi("Bob"); // ❌ TypeError: sayHi is not a function

const sayHi = function (name) { //in this case you get error because the function is defiend as expression 
    // and const goes to TDZ
    return `Hi, ${name}!`;
};