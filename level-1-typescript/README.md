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
