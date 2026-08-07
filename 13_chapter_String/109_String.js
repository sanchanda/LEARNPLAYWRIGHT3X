let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
console.log(msg);

// Multiline string wrapped in `
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

console.log(String(200)); // converts number to string
String(true); //  "true" converts boolean to string
console.log(String(null)); // "null" converst null to string
console.log(String([1, 2])); // "[1,2]" converts array to string

