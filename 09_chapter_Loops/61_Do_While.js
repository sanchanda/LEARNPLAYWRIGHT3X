//In Do .. while loop first block of code is excuted and then condition is checked.
//In Do ...while loop the code is executed at lest once
let retry = 0;
do {
    console.log("Execute a Code!");
    console.log("RETRYing.......", retry);
    retry++;
} while (retry < 3);