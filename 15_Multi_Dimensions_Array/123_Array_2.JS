let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

console.log(grid[0][0])
// grid[2][1]; 
// grid[1][2];

grid[0][0] = 99;
console.log(grid);

console.log(grid.length); // 3 — returns number of rows
console.log(grid[0].length); // returns 1st row length i.e., columns of 1st row

console.log(grid[grid.length - 1][grid[0].length - 1]);
console.log(grid[2][2]);

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for (let i = 0; i < testMatrix.length; i++) {
    for (let j = 0; j < testMatrix[i].length; j++) {
        process.stdout.write(testMatrix[i][j] + " ");
    }
    console.log("");
}

console.log(" ---@@@@------ ");
//looping using of
for (let row1 of testMatrix) {
    for (let cell1 of row1) {
        process.stdout.write(cell1 + " ")
    }
    console.log();
}
console.log(" ----####----- ");

// looping using forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

console.log(" --------- ");