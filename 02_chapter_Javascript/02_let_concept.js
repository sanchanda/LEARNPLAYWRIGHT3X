let a = 10;
console.log(a);

//for loop and addNUm function is treated as Hot Code because it is executed multiple times in a loop.
//Hot Code goes to JIT for optimization and is compiled to machine code for better performance.

for (let i = 0; i <= 1000000; i++) {
    console.log(i);
    addNum(i, i + 1)
}

function addNum(a, b) {
    let sum = a + b;
    console.log("Sum of " + a + " and " + b + " is: " + sum);
}