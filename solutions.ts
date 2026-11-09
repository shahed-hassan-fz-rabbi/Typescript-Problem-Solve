//problem 1 solution

function multiplyValue(value: number, multiplier: number = 2): number {
    return value * multiplier;
}

//console.log(multiplyValue(10));
//console.log(multiplyValue(10, 5));
//console.log(multiplyValue(7, 0));

//problem 2 solution

function processInput(value: string | number | boolean): string | number {
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



function formatCoordinate(loc: readonly [number, number, string]): string {
    const [lat, lon, name] = loc;
    return `Location: ${name} (${lat}, ${lon})`;
}

//check problem 3 solution


//console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
//console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

//problem 4 solution

function concatenateArrays<T>(...arr: T[][]): T[] {
    return arr.flat();
}

//check problem 4 solution

console.log(concatenateArrays(["a", "b"], ["c", "d"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));


