# JavaScript Versions & ECMAScript History (W3Schools Guide)

JavaScript was invented by **Brendan Eich** in 1995 and became an ECMA standard in 1997. The official specification is named **ECMAScript (ES)**.

---

## 📜 Full Historical Timeline of JavaScript Versions

| Year | Version Name | Official Standard | Major Features Introduced |
| :---: | :--- | :--- | :--- |
| **1997** | ES1 | ECMAScript 1 | First official standard edition. |
| **1998** | ES2 | ECMAScript 2 | Editorial synchronization with ISO/IEC standards. |
| **1999** | ES3 | ECMAScript 3 | Regular Expressions (`RegExp`), `try...catch` error handling, `do...while`. |
| **2009** | ES5 | ECMAScript 5 | `"use strict"`, JSON support (`JSON.parse`/`stringify`), Array methods (`map`, `filter`, `forEach`, `reduce`), getters & setters. |
| **2015** | **ES6 / ES2015** | ECMAScript 2015 | **The Massive Modern Revolution:** `let`, `const`, Arrow functions `()=>`, Classes, Modules (`import`/`export`), Promises, Template Literals, Destructuring, Spread/Rest `...`, Default parameters. |
| **2016** | ES2016 | ECMAScript 7 | Exponentiation operator (`**`), `Array.prototype.includes()`. |
| **2017** | ES2017 | ECMAScript 8 | `async` / `await`, `Object.values()`, `Object.entries()`, string padding (`padStart`, `padEnd`). |
| **2018** | ES2018 | ECMAScript 9 | Rest/Spread for objects `{...obj}`, asynchronous iteration (`for await...of`), `Promise.prototype.finally()`. |
| **2019** | ES2019 | ECMAScript 10 | `Array.prototype.flat()`, `flatMap()`, `Object.fromEntries()`, `String.trimStart()`, `trimEnd()`. |
| **2020** | ES2020 | ECMAScript 11 | **Optional Chaining (`?.`)**, **Nullish Coalescing (`??`)**, `BigInt`, `Promise.allSettled()`, dynamic `import()`. |
| **2021** | ES2021 | ECMAScript 12 | `String.replaceAll()`, `Promise.any()`, Logical assignment operators (`&&=`, `\|\|=`, `??=`). |
| **2022** | ES2022 | ECMAScript 13 | Top-level `await`, Private class fields (`#field`), `Array.at()`, `Object.hasOwn()`. |
| **2023** | ES2023 | ECMAScript 14 | Non-mutating array methods: `toSorted()`, `toReversed()`, `toSpliced()`, `findLast()`, `findLastIndex()`. |
| **2024+**| ES2024 / ESNext | Modern ECMAScript | `Object.groupBy()`, `Map.groupBy()`, `Promise.withResolvers()`, Temporal API (next-gen Date/Time). |

---

## 🌐 Browser Support & Compatibility

- Modern browsers (Chrome, Edge, Firefox, Safari) automatically support modern ES6+ through ES2024 features.
- For legacy enterprise browsers (like older Internet Explorer), developers use:
  - **Transpilers (Babel):** Converts modern ES6+ syntax back into older ES5 syntax automatically.
  - **Polyfills (core-js):** Implements missing modern functions (like `Array.prototype.flat`) on older engines.

