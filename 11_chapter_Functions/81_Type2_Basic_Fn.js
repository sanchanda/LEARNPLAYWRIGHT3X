// Type 2 Functions

// So with argument/parameter but no return type. 

function greetByName(name) {
    console.log("Hi", name);
}
greetByName("Pramod"); // argument
greetByName("Dipak");
greetByName("Meeti");
greetByName("Sangeetha");

let name1 = greetByName("Sumit"); // As function is not returning anything, it will return undefined. So name1 will be undefined.
console.log(name1);