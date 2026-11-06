# JavaScript Complete Alphabetical Reference Guide (W3Schools)

Quick lookup guide of standard built-in JavaScript methods, functions, and properties.

---

## 🔤 1. String Methods & Properties

| Method / Property | Description | Example |
| :--- | :--- | :--- |
| `str.length` | Returns character count | `"Hello".length` &rarr; `5` |
| `str.charAt(index)` | Returns character at index | `"JS".charAt(0)` &rarr; `"J"` |
| `str.charCodeAt(index)` | Returns Unicode value | `"A".charCodeAt(0)` &rarr; `65` |
| `str.concat()` | Joins two or more strings | `"A".concat("B")` &rarr; `"AB"` |
| `str.includes(search)` | Checks if substring exists | `"JavaScript".includes("Script")` &rarr; `true` |
| `str.indexOf(search)` | Returns first index or -1 | `"abc".indexOf("b")` &rarr; `1` |
| `str.lastIndexOf(search)` | Returns last index or -1 | `"aba".lastIndexOf("a")` &rarr; `2` |
| `str.replace(target, sub)` | Replaces first match | `"cat".replace("c", "b")` &rarr; `"bat"` |
| `str.replaceAll(target, sub)` | Replaces all matches | `"aa".replaceAll("a", "b")` &rarr; `"bb"` |
| `str.slice(start, end)` | Extracts section | `"Hello".slice(1, 4)` &rarr; `"ell"` |
| `str.split(separator)` | Splits string into array | `"a,b,c".split(",")` &rarr; `["a","b","c"]` |
| `str.startsWith(search)` | Checks prefix | `"Mr. John".startsWith("Mr.")` &rarr; `true` |
| `str.endsWith(search)` | Checks suffix | `"test.pdf".endsWith(".pdf")` &rarr; `true` |
| `str.toLowerCase()` | Converts to lowercase | `"HI".toLowerCase()` &rarr; `"hi"` |
| `str.toUpperCase()` | Converts to uppercase | `"hi".toUpperCase()` &rarr; `"HI"` |
| `str.trim()` | Trims whitespace both ends | `"  hi  ".trim()` &rarr; `"hi"` |
| `str.trimStart() / trimEnd()` | Trims one side | `"  hi".trimStart()` &rarr; `"hi"` |
| `str.padStart(len, char)` | Pads start of string | `"5".padStart(3, "0")` &rarr; `"005"` |
| `str.padEnd(len, char)` | Pads end of string | `"5".padEnd(3, "0")` &rarr; `"500"` |
| `str.repeat(count)` | Repeats string | `"Ha".repeat(3)` &rarr; `"HaHaHa"` |

---

## 🔢 2. Number & Math Methods

| Method | Description | Example |
| :--- | :--- | :--- |
| `num.toFixed(digits)` | Formats with fixed decimal places | `(3.1415).toFixed(2)` &rarr; `"3.14"` |
| `num.toString()` | Converts number to string | `(123).toString()` &rarr; `"123"` |
| `Number.isInteger(val)` | Checks if integer | `Number.isInteger(4.2)` &rarr; `false` |
| `Number.isNaN(val)` | Checks if NaN | `Number.isNaN(NaN)` &rarr; `true` |
| `Math.abs(x)` | Absolute positive value | `Math.abs(-5)` &rarr; `5` |
| `Math.ceil(x)` | Rounds UP | `Math.ceil(4.1)` &rarr; `5` |
| `Math.floor(x)` | Rounds DOWN | `Math.floor(4.9)` &rarr; `4` |
| `Math.round(x)` | Rounds to nearest integer | `Math.round(4.5)` &rarr; `5` |
| `Math.max(...nums)` | Highest number | `Math.max(10, 20, 5)` &rarr; `20` |
| `Math.min(...nums)` | Lowest number | `Math.min(10, 20, 5)` &rarr; `5` |
| `Math.pow(base, exp)` | Power (`base ** exp`) | `Math.pow(2, 3)` &rarr; `8` |
| `Math.random()` | Random number between 0 and 1 | `Math.random()` |
| `Math.sqrt(x)` | Square root | `Math.sqrt(16)` &rarr; `4` |

---

## 📦 3. Array Methods

| Method | Description | Mutates Original? | Example |
| :--- | :--- | :---: | :--- |
| `push(...items)` | Adds to end | ✅ Yes | `arr.push("d")` |
| `pop()` | Removes last item | ✅ Yes | `arr.pop()` |
| `unshift(...items)` | Adds to start | ✅ Yes | `arr.unshift("a")` |
| `shift()` | Removes first item | ✅ Yes | `arr.shift()` |
| `splice(start, del, ...add)`| Adds/removes items | ✅ Yes | `arr.splice(1, 1)` |
| `reverse()` | Reverses items | ✅ Yes | `arr.reverse()` |
| `sort(compareFn)` | Sorts items | ✅ Yes | `arr.sort((a,b)=>a-b)` |
| `concat(arr2)` | Merges arrays | ❌ No | `[1].concat([2])` &rarr; `[1, 2]` |
| `slice(start, end)` | Slices sub-array | ❌ No | `arr.slice(0, 2)` |
| `includes(val)` | Checks existence | ❌ No | `[1, 2].includes(2)` &rarr; `true` |
| `indexOf(val)` | Returns index | ❌ No | `["a", "b"].indexOf("b")` &rarr; `1` |
| `join(separator)` | Joins to string | ❌ No | `["a", "b"].join("-")` &rarr; `"a-b"` |
| `forEach(fn)` | Runs function on each | ❌ No | `arr.forEach(x => ...)` |
| `map(fn)` | Transforms each item | ❌ No | `[1, 2].map(x => x*2)` &rarr; `[2, 4]` |
| `filter(fn)` | Filters matching items | ❌ No | `[1, 4].filter(x => x>2)` &rarr; `[4]` |
| `reduce(fn, init)` | Aggregates to single value | ❌ No | `[1, 2, 3].reduce((a,b)=>a+b)` &rarr; `6` |
| `find(fn)` | Returns first match | ❌ No | `arr.find(x => x.id === 1)` |
| `findIndex(fn)` | Returns index of match | ❌ No | `arr.findIndex(x => x.id === 1)` |
| `some(fn)` | At least one matches? | ❌ No | `[1, 2].some(x => x > 1)` &rarr; `true` |
| `every(fn)` | All items match? | ❌ No | `[1, 2].every(x => x > 0)` &rarr; `true` |
| `flat(depth)` | Flattens nested arrays | ❌ No | `[[1], [2]].flat()` &rarr; `[1, 2]` |

---

## 🗃️ 4. Object & JSON Methods

| Method | Description |
| :--- | :--- |
| `Object.keys(obj)` | Array of property names |
| `Object.values(obj)` | Array of property values |
| `Object.entries(obj)` | Array of `[key, value]` pairs |
| `Object.assign(target, src)`| Copies properties from source to target |
| `Object.freeze(obj)` | Prevents modifying, adding, or deleting properties |
| `Object.hasOwn(obj, prop)` | Modern check if object has direct property |
| `JSON.stringify(val)` | Converts JavaScript object/array to JSON string |
| `JSON.parse(jsonStr)` | Parses JSON string back into JavaScript object |

---

## 🌐 5. Global Functions

| Function | Description | Example |
| :--- | :--- | :--- |
| `parseInt(str, radix)` | Parses string to integer | `parseInt("42px")` &rarr; `42` |
| `parseFloat(str)` | Parses string to float | `parseFloat("3.14m")` &rarr; `3.14` |
| `isNaN(val)` | Checks if value is NaN | `isNaN("hello")` &rarr; `true` |
| `isFinite(val)` | Checks if finite number | `isFinite(100)` &rarr; `true` |
| `encodeURI(uri)` | Encodes URI characters | `encodeURI("https://a.com?q=a b")` |
| `decodeURI(uri)` | Decodes encoded URI | `decodeURI("a%20b")` &rarr; `"a b"` |

---

## ⚡ 6. Promise Combinators & Async Methods

| Method | Resolves When | Rejects When | Return Value |
| :--- | :--- | :--- | :--- |
| `Promise.all(iterable)` | ALL promises fulfill | ANY promise rejects | Array of resolved values |
| `Promise.allSettled(iterable)` | ALL promises finish (settle) | Never rejects | Array of `{ status, value/reason }` |
| `Promise.race(iterable)` | First promise settles | First promise rejects | Value/reason of first settled |
| `Promise.any(iterable)` | First promise fulfills | ALL promises reject | First resolved value (or AggregateError) |
| `Promise.resolve(val)` | Returns fulfilled promise | N/A | Promise fulfilled with `val` |
| `Promise.reject(err)` | N/A | Returns rejected promise | Promise rejected with `err` |

---

## 🔐 7. Collections & Symbols Reference

| Structure / Primitive | Key Characteristics | Iteration & Size | Typical Use Case |
| :--- | :--- | :--- | :--- |
| `Map` | Key-value pairs of any type | Enumerable, `.size` | High-performance dynamic lookup table |
| `Set` | Unique values of any type | Enumerable, `.size` | Deduplication of arrays, membership tests |
| `WeakMap` | Keys MUST be objects; weakly held | Not enumerable, NO `.size` | Garbage-collected DOM metadata, private state |
| `WeakSet` | Values MUST be objects; weakly held | Not enumerable, NO `.size` | Tagging processed objects/DOM nodes |
| `Symbol(desc)` | Unique and immutable primitive | Hidden from standard loops | Non-colliding keys, well-known metaprogramming hooks |

---

## 🎯 8. Function Binding Methods

| Method | Execution | Parameters Format | Returns |
| :--- | :--- | :--- | :--- |
| `fn.call(thisArg, ...args)` | **Immediate** | Comma-separated list | Result of `fn` |
| `fn.apply(thisArg, [args])` | **Immediate** | Array of arguments | Result of `fn` |
| `fn.bind(thisArg, ...args)` | **Deferred** | Comma-separated list | New function with permanently bound `this` |


