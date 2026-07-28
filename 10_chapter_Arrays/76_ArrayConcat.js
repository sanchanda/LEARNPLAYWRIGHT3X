let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

let d1 = b.concat(a);
console.log(d1);

// spread (modern way) - concatenation. (...)
// ... all the eleement
let d = [...a, ...b];
console.log(d);

let d2 = [...b, ...a];
console.log(d2);

// Join 
// array into bug string
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);

let s1 = ["pass", "fail", "skip"].join(" @ ");
console.log(s1);