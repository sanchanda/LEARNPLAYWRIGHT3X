function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
        let fail = true;
        if (fail) {
            console.log('Failed!');
        }
    }

    return installBrowser; // retruns the function in closure
}

const runTc = startBrowser();
runTc(); // To call startBrowser() and then call installBrowser() function, we need to store the return value 
// of startBrowser() in a variable and then call that variable as a function. This is because startBrowser()
//  returns the installBrowser() function, which can then be invoked by calling runTc().
