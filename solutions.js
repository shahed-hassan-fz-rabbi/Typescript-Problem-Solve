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
//console.log(processInput("  TypeScript  "));
//console.log(processInput(7));
//console.log(processInput(true));
//console.log(processInput(false));
//problem 3 solution
function formatCoordinate(loc) {
    const [lat, lon, name] = loc;
    return `Location: ${name} (${lat}, ${lon})`;
}
//check problem 3 solution
//console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
//console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
//problem 4 solution
function concatenateArrays(...arr) {
    return arr.flat();
}
//check problem 4 solution
console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));
function getPopularCourses(arr, minStudents) {
    return arr.filter(c => c.isPublished && c.students >= minStudents);
}
//check problem 5 solution
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
