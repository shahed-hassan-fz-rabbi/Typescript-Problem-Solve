# Type Narrowing in TypeScript

## Introduction

A union type gives a value more than one possible shape. That flexibility is useful at function boundaries, but code must check which possibility it received before using type-specific operations. Type narrowing is TypeScript's way of tracking those checks and reducing a broad type to a more specific one inside a section of code.

## Practical checks

For primitive values, `typeof` is the natural guard. After checking a string, TypeScript permits string methods; the other branch below is known to be numeric:

```typescript
function describe(value: string | number): string {
  if (typeof value === "string") return value.trim().toUpperCase();
  return value.toFixed(2);
}
```

For class instances, `instanceof` checks the runtime prototype chain:

```typescript
function format(value: Date | Error): string {
  if (value instanceof Date) return value.toDateString();
  return value.message;
}
```

For object unions with different properties, use the `in` operator. Given `type Cat = { meow: string }` and `type Dog = { bark: string }`, the expression `"meow" in pet` identifies the cat branch, so `pet.meow` is safe there. The else branch can use `pet.bark`. This works best when each variant has a property that distinguishes it.

These checks also make runtime behavior clearer: the program verifies a value instead of assuming a caller supplied the expected shape. For more complex APIs, a dedicated discriminant such as `kind: "cat" | "dog"` can make branches even more explicit.

## Conclusion

Use `typeof` for primitive unions, `instanceof` for class instances, and `in` when object variants have distinct properties. Each guard helps TypeScript and the reader understand what operations are safe. Narrowing therefore connects runtime checks with compile-time type safety.
