"use strict";
console.log("*** Challenges ***")
/* Challenge #1 */
const BMI = function (mass, height) {
    return mass / height ** 2;
};

// example 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
let markBMI = BMI(markMass, markHeight);
let johnBMI = BMI(johnMass, johnHeight);
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// example 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;
markBMI = BMI(markMass, markHeight);
johnBMI = BMI(johnMass, johnHeight);
markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

/* Challenge #2 */
markBMI = markBMI.toFixed(2);
johnBMI = johnBMI.toFixed(2);
if (markHigherBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`);
} else {
    console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}!`);
}

/* Challenge #3 */
let avgDolphins;
let avgKoalas;

const trophy = function () {
    if (avgDolphins >= 100 || avgKoalas >= 100) {
        if (avgDolphins > avgKoalas) {
            console.log("Dolphins wins!");
        } else if (avgDolphins === avgKoalas) {
            console.log("It's a draw!");
        } else if (avgDolphins < avgKoalas) {
            console.log("Koalas wins!");
        }
    } else {
        console.log("No one wins!");
    }
};
const avg = function (score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
};

// example 1
avgDolphins = avg(96, 108, 89);
avgKoalas = avg(88, 91, 110);
trophy();
// example 2
avgDolphins = avg(97, 112, 101);
avgKoalas = avg(109, 95, 123);
trophy();
// example 3
avgDolphins = avg(97, 112, 101);
avgKoalas = avg(109, 95, 106);
trophy();
