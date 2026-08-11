// String Conversion


// To string
(200).toString(); // "200"
true.toString();  // "true"

Number("42");  //  42

parseInt("42px");  // 42
parseFloat("3.14rem"); //3.14

let str = "hello"; //. Things are immutable in nature in JS.
str[0] = "P";
console.log("--", str);

let upper = str.toUpperCase();
console.log(str);
console.log(upper);

let s = "abc";
s[0] = "z";
console.log(s);   // 'abc'  ← silently unchanged