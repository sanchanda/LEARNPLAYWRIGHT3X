// ============================================================
// JAVASCRIPT ARRAY METHODS — PRACTICAL EXAMPLES
// ============================================================

let arr;

// ============================================================
// 1. MUTATOR METHODS (modify the original array)
// ============================================================

console.log("=== MUTATOR METHODS ===");

// -- push() : add to end --
arr = [1, 2, 3];
console.log(arr.push(4, 5));       // 5 (new length)
console.log(arr);                  // [1, 2, 3, 4, 5]

// -- pop() : remove from end --
console.log(arr.pop());            // 5 (removed element)
console.log(arr);                  // [1, 2, 3, 4]

// -- unshift() : add to start --
console.log(arr.unshift(0));       // 5 (new length)
console.log(arr);                  // [0, 1, 2, 3, 4]

// -- shift() : remove from start --
console.log(arr.shift());          // 0 (removed element)
console.log(arr);                  // [1, 2, 3, 4]

// -- splice() : add/remove at index --
arr = ["a", "b", "c", "d"];
console.log(arr.splice(1, 2));     // ["b", "c"] (removed items)
console.log(arr);                  // ["a", "d"]
console.log(arr.splice(1, 0, "x", "y")); // [] (nothing removed)
console.log(arr);                  // ["a", "x", "y", "d"]

// -- sort() : sort in place --
arr = [9, 1, 20, 5];
console.log(arr.sort());           // [1, 20, 5, 9]  (lexicographic!)
console.log(arr.sort((a, b) => a - b)); // [1, 5, 9, 20] (numeric)

// -- reverse() : reverse in place --
console.log(arr.reverse());        // [20, 9, 5, 1]

// -- fill() : fill with static value --
arr = [1, 2, 3, 4, 5];
console.log(arr.fill(0, 1, 4));    // [1, 0, 0, 0, 5]

// -- copyWithin() : copy portion to another position --
arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3)); // [4, 5, 3, 4, 5]


// ============================================================
// 2. ACCESSOR METHODS (do not modify original)
// ============================================================

console.log("\n=== ACCESSOR METHODS ===");

arr = [10, 20, 30, 40, 50];

// -- at() : element at index (supports negative) --
console.log(arr.at(1));            // 20
console.log(arr.at(-1));           // 50
console.log(arr.at(-2));           // 40

// -- concat() : merge arrays --
console.log(arr.concat([60, 70])); // [10, 20, 30, 40, 50, 60, 70]
console.log(arr);                  // unchanged

// -- join() : elements to string --
console.log(arr.join(", "));       // "10, 20, 30, 40, 50"
console.log(arr.join("-"));        // "10-20-30-40-50"

// -- slice() : extract portion --
console.log(arr.slice(1, 3));      // [20, 30]
console.log(arr.slice(-2));        // [40, 50]

// -- indexOf() / lastIndexOf() --
arr = [1, 2, 3, 2, 1];
console.log(arr.indexOf(2));       // 1
console.log(arr.lastIndexOf(2));   // 3
console.log(arr.indexOf(99));      // -1

// -- includes() --
console.log(arr.includes(3));      // true
console.log(arr.includes(99));     // false

// -- toString() / toLocaleString() --
arr = [1, 2, 3];
console.log(arr.toString());       // "1,2,3"
console.log([1000, 2000].toLocaleString("en-IN")); // "1,000,2,000"


// ============================================================
// 3. ITERATOR METHODS (return iterators)
// ============================================================

console.log("\n=== ITERATOR METHODS ===");

arr = ["a", "b", "c"];

// -- keys() : index values --
console.log([...arr.keys()]);       // [0, 1, 2]

// -- values() : element values --
console.log([...arr.values()]);     // ["a", "b", "c"]

// -- entries() : [index, element] pairs --
console.log([...arr.entries()]);    // [[0, "a"], [1, "b"], [2, "c"]]

// practical: destructure in a loop
for (const [i, v] of arr.entries()) {
    console.log(`index ${i} → ${v}`);
}


// ============================================================
// 4. ITERATION METHODS (callback-based)
// ============================================================

console.log("\n=== ITERATION METHODS ===");

arr = [1, 2, 3, 4, 5];

// -- forEach() : execute callback for each --
arr.forEach((v, i) => console.log(`[${i}] = ${v}`));

// -- map() : transform each element --
console.log(arr.map(x => x * 10));     // [10, 20, 30, 40, 50]

// -- filter() : keep elements passing test --
console.log(arr.filter(x => x > 2));   // [3, 4, 5]

// -- reduce() : accumulate left-to-right --
console.log(arr.reduce((sum, x) => sum + x, 0)); // 15

// -- reduceRight() : accumulate right-to-left --
console.log(arr.reduceRight((sum, x) => sum + x, 0)); // 15

// -- every() : all pass? --
console.log(arr.every(x => x > 0));    // true
console.log(arr.every(x => x > 3));    // false

// -- some() : any pass? --
console.log(arr.some(x => x > 4));     // true
console.log(arr.some(x => x > 10));    // false

// -- find() : first element passing test --
console.log(arr.find(x => x > 3));     // 4

// -- findIndex() : index of first passing element --
console.log(arr.findIndex(x => x > 3));// 3

// -- findLast() : last element passing test --
console.log(arr.findLast(x => x > 3)); // 5

// -- findLastIndex() : index of last passing element --
console.log(arr.findLastIndex(x => x > 3)); // 4

// -- flat() : flatten nested arrays --
console.log([1, [2, [3, [4]]]].flat());     // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].flat(2));    // [1, 2, 3, [4]]
console.log([1, [2, [3, [4]]]].flat(Infinity)); // [1, 2, 3, 4]

// -- flatMap() : map then flatten one level --
console.log(arr.flatMap(x => [x, x * 10]));
// [1, 10, 2, 20, 3, 30, 4, 40, 5, 50]


// ============================================================
// 5. STATIC METHODS
// ============================================================

console.log("\n=== STATIC METHODS ===");

// -- Array.isArray() : check if array --
console.log(Array.isArray([1, 2, 3]));    // true
console.log(Array.isArray("hello"));      // false

// -- Array.from() : create from iterable/array-like --
console.log(Array.from("hello"));         // ["h", "e", "l", "l", "o"]
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]

// -- Array.of() : create from arguments --
console.log(Array.of(1, 2, 3));           // [1, 2, 3]
console.log(Array.of(5));                 // [5]  (unlike Array(5) which gives empty slots)


// ============================================================
// 6. ES2023 METHODS (non-mutating alternatives)
// ============================================================

console.log("\n=== ES2023 METHODS ===");

arr = [3, 1, 4, 1, 5];

// -- toSorted() : sorted copy (non-mutating) --
console.log(arr.toSorted((a, b) => a - b)); // [1, 1, 3, 4, 5]
console.log(arr);                            // [3, 1, 4, 1, 5] (unchanged)

// -- toReversed() : reversed copy --
console.log(arr.toReversed());               // [5, 1, 4, 1, 3]
console.log(arr);                            // unchanged

// -- toSpliced() : spliced copy --
console.log(arr.toSpliced(1, 2, 99));        // [3, 99, 1, 5]
console.log(arr);                            // unchanged

// -- with() : element replacement copy --
console.log(arr.with(0, 999));               // [999, 1, 4, 1, 5]
console.log(arr);                            // unchanged
