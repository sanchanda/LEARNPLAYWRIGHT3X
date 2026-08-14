console.log("Test 1: started");

setTimeout(function () {
    console.log("Test 2 : API response received after waiting for 5 seconds!")
}, 5000); //This function will execute after waiting for 5 seconds . In the mean time other lines of code will execute . Check o/p

console.log("Test 3: Moving to next last");