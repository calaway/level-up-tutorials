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

const sayWord = (word: string): string => {
  console.log(word);
  return word;
};

sayWord("hello");
sayWord("3");
