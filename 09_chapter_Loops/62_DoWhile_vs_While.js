//While loop code block is not execute as the condition is not met

console.log("============while loop....================");
let a1 = 10;
while (a1 < 10) {
    console.log(a1);
    a1++;
}

console.log("============do ... while loop....================");
////Do ... While loop code block is  executed at least once even when the condition is not met
let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);