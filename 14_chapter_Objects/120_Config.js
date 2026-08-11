let config = {};
config.browser = "Chrome"; // Adding key , values to object
config.timeout = 3000;
config.timeout = 5000; // latest
console.log(config);
delete config.browser; //deleting the key and its value from object using delete keyword
console.log(config);