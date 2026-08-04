function getStatus(code) {
    if (code >= 200 && code < 300) {
        return "Success";
    } else if (code >= 400 && code < 500) {
        return "client error";
    } else if (code >= 500) {
        return "server error";
    } else {
        return "unknown";
    }
}

console.log(getStatus(200));
console.log(getStatus(404));
console.log(getStatus(500));


// Returns nothing → undefined
function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
}

console.log(logTest("Hi this is a a log"));


function aaa() {
    return [2, 2, 3, 5, 4]; //retrun can be of any type, it can be a number, string, array, object, etc.
    /// return {"name : pramod"}; - object
}

console.log(aaa()); //returns an array of numbers