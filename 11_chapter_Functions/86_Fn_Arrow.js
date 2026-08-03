function greet(name) {
    return `Hello, ${name}!`;
}

const greet1 = function (name1) {
    return `Hello, ${name1}!`;
}

const greet2 = (name2) => `Hello, ${name2}!`;  // single line arrow function returns value without retun keyword and curly braces

const greet3 = (name3) => {
    //multi line arrow function
    let msg = name3.split("").reverse().join("");
    return msg;
}


// Arrow Fn

// If you want to make a normal function to arrow function. 
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>


console.log(greet("santosh"));
console.log(greet1("santosh"));
console.log(greet2("santosh"));
console.log(greet3("santosh"));