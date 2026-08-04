var a = "Santosh";

if (true) {
    console.log(a); //prints santosh as var is function scoped and not block scoped. 
    // So, the value of a is accessible inside the block.
    var a = "temp";
    console.log(a); //prints temp as var is reassigned inside the block
}