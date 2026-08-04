console.log(greeting);
var greeting = "Hello!";
console.log(greeting);

// Behind the scenes what happens in the Javascript engine is that the variable declaration is hoisted to the top of the
//  scope and initialized with undefined. The assignment stays in place. So the code above is equivalent to:
// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"