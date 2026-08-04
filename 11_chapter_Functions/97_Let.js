var a = "Santosh";
// 10,000lines 
if (true) {
    console.log(a);
    var a = "temp";
}

// Temporal Dead Zone is caused by let and const.

// Global Scope
// a = "Santosh"
// Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
// console.log(a); throws ReferenceError: Cannot access 'a' before initialization

let a1 = "Santosh";
// 10,000lines 
if (true) {
    console.log(a1); //throws ReferenceError: Cannot access 'a1' before initialization
    let a1 = "temp";
}