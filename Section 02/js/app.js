"use strict";
console.log("*** Learning ***");
// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(typeof Nan);
console.log(String(23), 23);

// type coercion
console.log("I am " + 41 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN
