function multiplyValue(inputValue: number, multiplier: number = 2): number {
    return inputValue * multiplier;
}

function processInput(inputValue: string | number | boolean): string | number {
    if (typeof inputValue === "string") {
        return inputValue.trim().toLowerCase();
    }

    if (typeof inputValue === "number") {
        return inputValue * 10;
    }

    return inputValue ? "Active" : "Inactive";
}

function formatCoordinate(coordinates: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = coordinates;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...inputArrays: T[][]): T[] {
    return inputArrays.flat();
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

function getPopularCourses(courseList: Course[], minimumStudentCount: number): Course[] {
    return courseList.filter((course: Course): boolean => course.isPublished && course.students >= minimumStudentCount);
}

function pluckValues<T, K extends keyof T>(itemList: T[], propertyKey: K): T[K][] {
    return itemList.map((item: T): T[K] => item[propertyKey]);
}

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

async function validateAgeAsync(age: number): Promise<string> {
    return new Promise<string>((resolve, reject): void => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"));
            return;
        }

        setTimeout((): void => resolve("Access Granted"), 1000);
    });
}
