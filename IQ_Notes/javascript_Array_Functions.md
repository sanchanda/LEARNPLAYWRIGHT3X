# JavaScript Array Methods

## Mutator Methods (modify the original array)

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `push(el1, ..., elN)` | Adds one or more elements to the **end** | New length | `arr.push(4)` |
| `pop()` | Removes the **last** element | Removed element | `arr.pop()` |
| `unshift(el1, ..., elN)` | Adds one or more elements to the **start** | New length | `arr.unshift(0)` |
| `shift()` | Removes the **first** element | Removed element | `arr.shift()` |
| `splice(start, deleteCount, item1, ..., itemN)` | Adds/removes elements **at a specific index** | Array of removed items | `arr.splice(1, 1, 'x')` |
| `sort(compareFn?)` | Sorts elements **in place** (default: lexicographic) | Sorted array | `arr.sort((a,b) => a - b)` |
| `reverse()` | Reverses order **in place** | Reversed array | `arr.reverse()` |
| `fill(value, start?, end?)` | Fills elements with a static value | Modified array | `arr.fill(0, 1, 3)` |
| `copyWithin(target, start, end?)` | Shallow copies portion to another position | Modified array | `arr.copyWithin(0, 2)` |

## Accessor Methods (do not modify original array)

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `at(index)` | Returns element at index (supports negative indexing) | Element or `undefined` | `arr.at(-1)` |
| `concat(arr1, ..., arrN)` | Merges two or more arrays | New array | `arr1.concat(arr2)` |
| `join(separator?)` | Joins all elements into a string | String | `arr.join(', ')` |
| `slice(start?, end?)` | Extracts a shallow copy of a portion | New array | `arr.slice(1, 3)` |
| `indexOf(el, fromIndex?)` | Finds first index of an element | Index or `-1` | `arr.indexOf(2)` |
| `lastIndexOf(el, fromIndex?)` | Finds last index of an element | Index or `-1` | `arr.lastIndexOf(2)` |
| `includes(el, fromIndex?)` | Checks if element exists | Boolean | `arr.includes(3)` |
| `toString()` | Converts array to comma-separated string | String | `arr.toString()` |
| `toLocaleString()` | Localized string representation | String | `arr.toLocaleString()` |

## Iterator Methods (return iterators)

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `keys()` | Returns iterator of **index** values | Iterator object | `[...arr.keys()]` |
| `values()` | Returns iterator of **element** values | Iterator object | `[...arr.values()]` |
| `entries()` | Returns iterator of **[index, element]** pairs | Iterator object | `[...arr.entries()]` |

## Iteration Methods (callback-based)

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `forEach(cb)` | Executes callback for each element | `undefined` | `arr.forEach(x => console.log(x))` |
| `map(cb)` | Creates new array from callback results | New array | `arr.map(x => x * 2)` |
| `filter(cb)` | Creates new array with elements that pass test | New array | `arr.filter(x => x > 2)` |
| `reduce(cb, initialValue?)` | Reduces array to a single value (left-to-right) | Accumulated value | `arr.reduce((sum, x) => sum + x, 0)` |
| `reduceRight(cb, initialValue?)` | Same as reduce but right-to-left | Accumulated value | `arr.reduceRight((sum, x) => sum + x, 0)` |
| `every(cb)` | Checks if **all** elements pass the test | Boolean | `arr.every(x => x > 0)` |
| `some(cb)` | Checks if **any** element passes the test | Boolean | `arr.some(x => x > 5)` |
| `find(cb)` | Returns the **first** element that passes the test | Element or `undefined` | `arr.find(x => x > 2)` |
| `findIndex(cb)` | Returns the **index** of first element passing test | Index or `-1` | `arr.findIndex(x => x > 2)` |
| `findLast(cb)` | Returns the **last** element that passes the test | Element or `undefined` | `arr.findLast(x => x > 2)` |
| `findLastIndex(cb)` | Returns the **index** of last element passing test | Index or `-1` | `arr.findLastIndex(x => x > 2)` |
| `flat(depth?)` | Flattens nested arrays to specified depth | New array | `arr.flat(2)` |
| `flatMap(cb)` | Maps then flattens one level | New array | `arr.flatMap(x => [x, x * 2])` |

## Static Methods

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `Array.isArray(value)` | Checks if value is an array | Boolean | `Array.isArray([])` |
| `Array.from(arrayLike, mapFn?)` | Creates array from iterable/array-like | New array | `Array.from('hello')` |
| `Array.of(el1, ..., elN)` | Creates array from arguments | New array | `Array.of(1, 2, 3)` |

## ES2023 (ES14) — New Methods

These are the **latest additions** to the Array prototype, available in Node.js 20+ and modern browsers:

| Method | Description | Returns | Example |
|--------|-------------|---------|---------|
| `toSorted(compareFn?)` | Returns sorted copy (non-mutating `sort`) | New array | `arr.toSorted((a,b) => a - b)` |
| `toReversed()` | Returns reversed copy (non-mutating `reverse`) | New array | `arr.toReversed()` |
| `toSpliced(start, deleteCount, item1, ..., itemN)` | Returns spliced copy (non-mutating `splice`) | New array | `arr.toSpliced(1, 1, 'x')` |
| `with(index, value)` | Returns copy with element at index replaced | New array | `arr.with(1, 'new')` |

## Common Pitfalls

- **`sort()` without compareFn** sorts lexicographically (as strings). `[9, 1, 20].sort()` → `[1, 20, 9]`. Always pass `(a, b) => a - b` for numeric sort.
- **`push()` returns the new length**, not the array itself.
- **`splice()` and `slice()` are easily confused**: `splice` mutates, `slice` does not.
- **`forEach()` cannot be broken out of** — use `for...of`, `some()`, or `every()` for early exit.
- **`flatMap()` only flattens one level** — use `flat()` for deeper nesting.
