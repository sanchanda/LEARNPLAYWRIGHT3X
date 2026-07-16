let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

let isCLI = false;
let loglevel = isCLI ? "verbose" : "Normal";
console.log("Log level is set to :", loglevel, "mode");