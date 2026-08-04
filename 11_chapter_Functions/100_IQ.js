let a = 10
console.log(a)
if (true) {
    console.log(a); //throws ReferenceError: Cannot access 'a' before initialization inside the block a is in Temporal Dead Zone.
    let a = 20;
}