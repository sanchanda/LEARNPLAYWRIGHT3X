function makeCounter(start = 0) {
    let count = start;
    return { // you can write functions inside the restun block in case of closures
        increment() { count++; },
        decrement() { count--; },
        get() { return count; }
    };
}

let counter = makeCounter(0);
counter.increment();
counter.increment(); //latest count value is remembered in closure
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());
//counter(); // When you mutiple functions in a closure . You can't call directly as you did in 105_Closure.js
console.log(counter.get());
