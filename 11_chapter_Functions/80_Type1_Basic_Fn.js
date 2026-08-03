// Type 1 - No param, No Return -> final retunr undefined.
// Define
function greet() {
    console.log("Hi");
}
// No Param and no Return (void)

// Call
greet();
greet();
greet();

let output = greet();
console.log(output); //As function is not returning anything, it will return undefined. So output will be undefined.


function openBrowser() {
    console.log("Open Browser");
    // open the brower

}