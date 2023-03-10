"use strict";

console.log("*** Learning ***");
/*
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
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}
let age1 = 18;
let age2 = "18";
if (age1 === age2) {
    console.log("Exactly!");
} else {
    console.log("Not the same");
}


const hasDriversLicense = true; // A
const hasGoodVision = true; // B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}

const isTired = false; // C

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}
*/
const age = 23;
// age >= 18
//     ? console.log("I like to drink wine")
//     : console.log("I like to drink water");
const drink = age >= 18 ? "wine" : "water";
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
