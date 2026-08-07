// String Properties & Basic Access

let a = "dasdad'as\nadasd";  //use double quotes when you want to have single quote part of the string
let a2 = 'dasdad "a"sdsa\ndasd'; // use single quote if you want to have double quote of your string

console.log(a);
console.log(a2);


let str = "Hello, World!";
console.log(str.length); // start 1
console.log(str[0]); // index = 0
console.log(str[7]);
console.log(str.at(-1));
console.log(str.at(-6));
console.log("heeyy :", str.at(0));
// charAt()
str.charAt(0);
str.charCodeAt(0);  // 72