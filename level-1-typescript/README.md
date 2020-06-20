# Level Up Tutorials - Level 1 TypeScript

## 1 What Is TypeScript

[TypeScript](https://www.typescriptlang.org/) is a typed superset of JavaScript that compiles to plain JavaScript. This means all regular JS is valid TS, but with TS you can add types to find bugs faster and make your code more scalable.

## 2 Setting Up Our Project

To set up our project we will first get started with Parcel, which is the bundler that runs the TS compiler for us. Scott says Parcel is significantly simpler than Webpack.

```bash
# Install parcel-bundler globally
npm install -g parcel-bundler
```

What we did:

1. Set up a basic html template in `index.html`.
1. Create `index.ts` with a "Hello World" log and source the script from `index.html`.
1. Create a `package.json` with an npm script for `parcel index.html`.
1. Compile the project and start the server with `npm start.
1. View our Hello World at http://localhost:1234.

## 3 Basic Types

This section discussed TS's basic types ([docs](https://www.typescriptlang.org/docs/handbook/basic-types.html)). Here are some examples:

```ts
const isOpen: boolean = false;

const myName: string = "Calaway";

const myAge: number = 36.6;

const list: number[] = [0, 1, 2];

const tuple: [string, number, boolean] = ["Calaway", 32, false];

enum Job {
  WebDev,
  WebDesigner,
  PM,
}
const job = Job.WebDev;

const phone: any = "Pixel";
const tablet: never = 3; // Error: Type '3' is not assignable to type 'never'.ts
```

## 4 TypeScript At Compile Time With Parcel

You could use the compiler from the TS project TSC (TypeScript Compiler), but we're choosing Parcel for the nice features that come along with it, and Parcel will end up using the TSC under the hood.

```bash
# Install the TS plugin and bundler for Parcel
npm install --save-dev parcel-plugin-typescript
npm install --save-dev --save-exact parcel-bundler@1.9.4 # Lock in this version due to a bug that hasn't been resolved.
```

If this worked you should now get a compile time error on

```ts
const tablet: never = 3;
```

of

> `Type '3' is not assignable to type 'never'.`

Fix it by changing the type to `number` or `any`.

## 5 Functions In TypeScript

You can declare the type of both the inputs and the outputs of a function.

```ts
const sayWord = (word: string): string => {
  return word;
};

sayWord("hello");
sayWord("3");
```

In this example we are declaring the input `word` to be of type `string`, as well as the return value. If either the input or the output is not a string it will fail at compile time.

## 6 Optional, Default & Rest Params

### ? For Optional Params

Say we want the parameter to be optional. Our code will now fail the compiler.

```ts
const sayWord = (word: string): string => {
  console.log(word || "Hello");
  return word || "Hello";
};

sayWord(); // Error: Expected 1 arguments, but got 0.
```

To declare the parameter optional, add a `?` after it.

```ts
const sayWord = (word?: string): string => {
// ...
```

### Default Params

```ts
const sayWord = (word = "Hello"): string => {
  console.log(word);
  return word;
};

sayWord();
```

This will just work with no type declared for `word` because TS knows `'Hello'` is of type `string`. So the default parameter also functions as the type declaration.

### Rest Syntax

```ts
const sayWord = (word = "Hello", ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord("foo", "bar", "baz"); // logged: ["bar", "baz"]
```

So the "rest" that is spread into the params is treated as an array and can be declared as such.

Note: Named parameters will be discussed later with the topic of interface.

## 7 Implicit Types

```ts
let newName = "Scott";
newName = "Wes";
newName = 10; // Type '10' is not assignable to type 'string'.

let newNameTwo = newName; // Infers string type from initial implicit declaration, not current value
newNameTwo = 10; // Type '10' is not assignable to type 'string'.
```

It's probably preferable to be explicit anyway.

```ts
let newName: string = "Scott";
```

## 8 Union Types

Use the pipe operator (`|`) for union types, (i.e. `or` relationship).

```ts
const makeMargin = (x: number | string): string => {
  return `margin: ${x}px`;
};

makeMargin(10);
makeMargin("10");
makeMargin(false); // Argument of type 'false' is not assignable to parameter of type 'string | number'.
```

### Null Types

`null` and `undefined` are valid for any types by default.

```ts
let dog: string;
dog = null; // 👍
dog = "Lucie"; // 👍
dog = 10; // Type '10' is not assignable to type 'string'.
dog = false; // Type 'false' is not assignable to type 'string'.
dog = undefined; // 👍
```

Note: there is a "strict null check" configuration to disable this default behavior.

## 9 Interfaces

Interfaces allow you to define types for an object using the `interface` TS keyword. This might look similar to GraphQL schema types. These can be useful for named parameters.

```ts
interface Cat {
  name: string;
  age?: number; // ? optional param
}

const myCat = ({ name, age }: Cat): Cat => {
  console.log(`My cat's name is ${name} and he is ${age} years old`);
  return { name, age };
};

myCat({ name: "Bugsy", age: 11 }); // 👍
myCat({ name: "Bugsy" }); // 👍
myCat({ age: 11 }); // Argument of type '{ age: number; }' is not assignable to parameter of type 'Cat'. Property 'name' is missing in type '{ age: number; }' but required in type 'Cat'.
```

.

.

.

.

.

.

.

.
