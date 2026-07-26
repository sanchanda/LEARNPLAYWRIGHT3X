// Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);


console.log(statuses.at(-1));
console.log(statuses.at(-2));

console.log(statuses.at(-4));

// Modify
statuses[1] = "blocked";
console.log(statuses);

// Length
console.log(statuses.length);

//invalid index , but JS does not throw error
statuses["A"] = "hi";
console.log(statuses);
//[ 'pass', 'blocked', 'skip', A: 'hi' ]

console.log(statuses.length);
console.log(statuses["A"]);