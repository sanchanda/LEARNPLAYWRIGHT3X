// var a;
console.log(a); // displays undefined as var is hoisted to the top of the scope and initialized with undefined
//  as var is initialzed in next line.
var a = "Santosh";
console.log(a);

// ---- Phase 1: Memory Creation ----
// var a1  = undefined;
// var b1  = undefined;
console.log(a1); // undefind
var a1 = "Santosh";
console.log(a1); // changed

// Hoisting does NOT physically move your code.
// It is a mental model to understand how the
//  JS engine handles declarations during compilation.