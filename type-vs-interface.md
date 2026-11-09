# Type Aliases and Interfaces in TypeScript

## Introduction

TypeScript lets us describe the shape of data before the program runs. Two common tools for this are type aliases and interfaces. They overlap when describing objects, so choosing between them can feel confusing at first. The useful difference is how broadly each tool can describe types and how each can be extended.

## Detailed comparison

A type alias gives a name to almost any type: an object, primitive, tuple, union, or intersection. For example, a program can accept either kind of identifier with `type UserId = number | string;`. An alias can also describe a particular object:

```typescript
type User = { name: string; age: number };
```

Interfaces focus on object shapes and class contracts. They can extend other interfaces, making related structures easy to build from shared fields:

```typescript
interface Person { name: string; }
interface Teacher extends Person { subject: string; }
```

Both forms can describe `User`-like objects and both catch missing or wrongly typed properties. A notable interface feature is declaration merging: separate declarations with the same interface name are combined. Type aliases cannot be reopened this way. To compose aliases, use intersections such as `type Admin = User & { permissions: string[] };`.

## Conclusion

I use an interface when I am naming an object contract that may be extended or implemented by a class. I use a type alias for unions, tuples, primitives, or combinations that need `|` and `&`. In ordinary object cases either is valid, so consistency with the surrounding code matters too.
