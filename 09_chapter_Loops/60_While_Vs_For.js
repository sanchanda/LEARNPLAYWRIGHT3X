//code neter into the while block because condition is true by default and code comes out of loop when age is 11

let age = 7;
while (true) {
    if (age > 10) {
        break;
    }
    else {
        console.log(age);
    }
    age++;
}