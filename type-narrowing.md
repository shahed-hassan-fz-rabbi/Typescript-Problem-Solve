# Type Narrowing in TypeScript

## Introduction

Type Narrowing is an important feature of TypeScript. It helps us identify the specific type of a variable when that variable can contain different types of values. This makes our code safer and easier to work with.

## What is Type Narrowing?

Sometimes a variable can accept multiple types using a union type. TypeScript allows us to check the actual type before performing an operation.

There are different ways to narrow types in TypeScript.

## 1. Using typeof

The `typeof` operator checks primitive types such as string, number, and boolean.

```typescript
function checkVal(val: string | number): string {
    if (typeof val === "string") {
        return val.toUpperCase();
    }

    return val.toString();
}
```

Here, TypeScript understands that `val` is a string inside the `if` block. Otherwise, it is a number.

## 2. Using instanceof

The `instanceof` operator checks whether an object belongs to a particular class.

```typescript
class Student {
    name = "Rahim";
}

function checkUser(val: Student | Date): string {
    if (val instanceof Student) {
        return val.name;
    }

    return val.toDateString();
}
```

This helps TypeScript identify which properties and methods are available.

## 3. Using the in Operator

The `in` operator checks whether a property exists in an object.

```typescript
type Cat = { meow: string };
type Dog = { bark: string };

function checkPet(pet: Cat | Dog): string {
    if ("meow" in pet) {
        return pet.meow;
    }

    return pet.bark;
}
```

Here, TypeScript identifies the correct object type based on its property.

## Conclusion

Type Narrowing is useful when working with union types. Operators like `typeof`, `instanceof`, and `in` help us safely access values and properties. It also reduces type-related errors and makes TypeScript code more reliable.