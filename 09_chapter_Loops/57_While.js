//initalizing the foor loop counter outside the for loop is  acceptable but not recommended

let i = 0;
for (; i < 5; i++) {
    console.log(i);
}

console.log("=======While Loop=========")

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//Using above example it looks like for and while loops are same. but while loop is used when you are want to loop the
// repeatable code until a condition is met then you go to while loop and where you are not sure about the counter end value
// but you only know the condtion
