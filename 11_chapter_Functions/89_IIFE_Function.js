//Immediately Invoked Function Expression (IIFE)
//They don't need to be called. 

function name1() {
    console.log("Hi")
}
name1(); // Generally function is called by name1(); but IIFE is called with () at the end of the function declaration. This is an IIFE function.


// IIFE
(function () {
    console.log("Anonymous Fun");
})(); // This function is called with () at the end of the function declaration. This is an IIFE function. IIFE 


(function () {
    console.log("Staging")
})(); // This function is called with () at the end of the function declaration. This is an IIFE function.


//Arrow Crazy

(() => {
    console.log("Setup complete");
})(); // This function is called with () at the end of the function declaration. This is an IIFE function.

