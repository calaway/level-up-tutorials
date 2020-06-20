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

// Functions in TypeScript

const sayWord = (word = "Hello", ...otherStuff: string[]): string => {
  console.log(otherStuff);
  return word;
};

sayWord("foo", "bar", "baz");
sayWord("3");

// Implicit Types

let newName = "Scott";
newName = "Wes";
newName = 10; // Type '10' is not assignable to type 'string'.

let newNameTwo = newName; // Infers string type from initial implicit declaration, not current value
newNameTwo = 10; // Type '10' is not assignable to type 'string'.
