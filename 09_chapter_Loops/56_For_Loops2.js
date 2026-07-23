// _1 variable is a valid variable

for (let _1 = 0; _1 <= 3; _1++) {
    console.log(_1);
}

console.log("================================");

//Condition is not met hence loop does not execute
for (let pramod = 0; pramod > 1; pramod++) {
    console.log(pramod);
}

console.log("================================");

// adding conditions inside for loops

for (let somya = 0; somya < 18; somya++) {
    if (somya > 15) {
        console.log("Gift from papa, iphone this year")
    } else {
        console.log("No Gift, iphone only barbie doll")
    }

}

console.log("================================");

//As condition is missing ,  then for loop will execute infinite times

// for (let pramod1 = 0; ; pramod1++) {
//     console.log(pramod1);
// }
