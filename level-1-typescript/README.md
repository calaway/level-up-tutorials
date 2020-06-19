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

