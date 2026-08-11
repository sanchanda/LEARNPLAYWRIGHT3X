let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));

// Splitting & Joining
let arr1 = "pass,fail,skip".split(",");  // ["pass", "fail", "skip"]
console.log(arr1);
let arr2 = "hello".split("");  // ["h","e","l","l","o"]
console.log(arr2);

// Template literal (joining with format)
let parts = ["2024", "03", "07"];
let date = parts.join("-");
console.log(date);