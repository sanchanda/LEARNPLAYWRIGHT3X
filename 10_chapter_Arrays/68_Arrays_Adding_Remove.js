let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]

//removes index 2 item
arr.splice(2, 1);
console.log(arr);
//output is [ 1, 2, 5, 6 ]


// modifies index 2 item as 0 items are asked to remove . Hence modifies 2 index item

arr.splice(2, 0, 99);
console.log(arr);
//output is [ 1, 2, 99, 5, 6 ]


//removes 2 items from index 1 and then adds 10 ,20 from index 1
arr.splice(1, 2, 10, 20);
console.log(arr);
// output is [ 1, 10, 20, 5, 6 ]

// removes 2 items starting from 0 index
arr.splice(0, 2);
console.log(arr);
