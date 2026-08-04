function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3, 5];
console.log(add(...num)); //first 3 elemnts of the array will be passed to the function as arguments as function 
//can take 3 arguments and the rest will be ignored.

// ----
function hasError(...codes) {
    return codes.some(c => c >= 400);
}


let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500]; //hasError function will take all the elements of the array as arguments
// and check if any of them is greater than or equal to 400. If yes, it will return true, else false.
console.log(hasError(...responseCodes));
console.log(hasError(...responseCodes2));
