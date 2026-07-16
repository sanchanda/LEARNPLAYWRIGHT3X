// Multiple Condition

let age = 26;
//   age > 18 -> he will goa, else not else
// drink > 25  yes, else no 
let is_allowed_to_drink = age > 18 ? (age > 25 ? "Drink" : "No") : false;
console.log(`Can xyz Drink? : ${is_allowed_to_drink}`);

let age1 = 17;
let is_allowed_to_drink1 = age1 > 18 ? (age1 > 26 ? "Yes Drink allowed" : "No Drink not allowed") : false;
console.log(`Can abc Drink ? : ${is_allowed_to_drink1}`);
