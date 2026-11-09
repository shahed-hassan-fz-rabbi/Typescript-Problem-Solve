"use strict";
//problem 1 solution
function multiplyValue(value, multiplier = 2) {
    return value * multiplier;
}
//console.log(multiplyValue(10));
//console.log(multiplyValue(10, 5));
//console.log(multiplyValue(7, 0));
//problem 2 solution
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
}
//check problem 2 solution
console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
