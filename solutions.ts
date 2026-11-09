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



 //problem 5 solution

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(arr: Course[], minStudents: number): Course[] {
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



//problem 6 solution

function pluckValues<T, K extends keyof T>(arr: T[], key: K): T[K][] {
    return arr.map(item => item[key]);
}

//check problem 6 solution

//const users = [
//    { id: 1, name: "Rakib", role: "Admin" },
//    { id: 2, name: "Sadia", role: "Editor" },
//    { id: 3, name: "Tariq", role: "Subscriber" }
//];

//console.log(pluckValues(users, "name"));
//console.log(pluckValues(users, "id"));



//problem 7 solution

class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

//check problem 7 solution

//const m = new Manager("Alice", 50000, "Engineering");
//console.log(m.getDetails());
//console.log(m.getRoleInfo());

