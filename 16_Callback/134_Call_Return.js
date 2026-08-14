function calculate(a, b, operation) { // callback function can return a function
    return operation(a, b);
}

let sum = calculate(10, 5, function (x, y) {
    return x + y;
});

console.log(sum);