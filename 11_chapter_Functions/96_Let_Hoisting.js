console.log(username); //This line throws ReferenceError: Cannot access 'username' before initialization . 
// This is because let and const are hoisted but not initialized. This causes TDZ (Temporal Dead Zone) 
// which means that the let identifiercannot be accessed before it is declared.
let username = "santosh";
console.log(username);
