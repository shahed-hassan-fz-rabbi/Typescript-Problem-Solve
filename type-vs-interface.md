# Type Alias vs Interface in TypeScript

## Introduction

TypeScript provides two useful ways to define the structure of data: Type Alias and Interface. Both help us write safer code by checking types before running a program. Although they look similar, there are some differences between them.

## What is a Type Alias?

A Type Alias is created using the `type` keyword. It can define objects, strings, numbers, unions, tuples, and other types.

```typescript
type User = {
    name: string;
    age: number;
};

const user: User = {
    name: "Rahim",
    age: 22
};
```

Here, `User` defines an object with two properties. Type aliases are useful when we need union or intersection types.

```typescript
type ID = string | number;
```

## What is an Interface?

An Interface is created using the `interface` keyword. It is mainly used to describe the structure of objects and classes.

```typescript
interface Student {
    name: string;
    roll: number;
}

const s1: Student = {
    name: "Karim",
    roll: 10
};
```

Interfaces also support extension, which helps us reuse existing structures.

```typescript
interface Person {
    name: string;
}

interface Teacher extends Person {
    subject: string;
}
```

## Main Differences

Both can describe object structures. However, interfaces support declaration merging, meaning multiple declarations with the same name can be combined. Type aliases do not support this feature.

Type aliases are more flexible for unions, tuples, and primitive types. Interfaces are often preferred for object structures and class contracts.

## Conclusion

Both Type Alias and Interface are important in TypeScript. I prefer interfaces for objects and classes, while type aliases are useful for unions and complex type combinations. Choosing the right one makes code easier to understand and maintain.