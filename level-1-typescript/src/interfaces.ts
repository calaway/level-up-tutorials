export default interface Cat {
  name: string;
  age?: number; // ? optional param
}

// numerical enum
export enum Permission {
  Read, // 0
  Write, // 1
  Execute, // 2
}

// string enum
export enum Permission2 {
  Read = "READ",
  Write = "WRITE",
  Execute = "EXECUTE",
}
