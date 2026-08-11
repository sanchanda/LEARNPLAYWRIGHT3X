// let a = { status: "pass" };
// console.log(a.status);
// console.log(a["status"]);

let a1 = { status: 'pass' };
console.log(a1.status);

//keys are case sensitive.
let a22 = { status: "pass", Status: "fail" };
console.log(a22["status"]);
console.log(a22["Status"]);

let a = { status: "pass" };
let b = a;  //Copy the reference
b.status = "fail";
console.log(a.status); // Objects are copied by reference .Hence when b object changed the status object a status alos reflecting same


let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d); // Here objects address is compared. Hence result will be false


const t_json = { //json object key will be inside the double quotes
    "name": "pramod",
    "age": 10
};
console.log(t_json);

const t_js = { //normal object where key is not enclosed in double quotes 
    name: "pramod",
    age: 10
};
console.log(t_js);