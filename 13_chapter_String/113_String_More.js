let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespace
console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());

// Replace functions will not change the original string
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // // "Test: PASS. Retry: FAIL."  (first only)
console.log(msg);
console.log(msg.replaceAll("FAIL", "PASS"));
console.log(msg);
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regex
console.log(msg);


// Concatenation

console.log("Hello" + " " + "World");
console.log("Hello".concat(" ", "World"));
console.log(`${"Hello"} ${"World"}`);