// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
let age: number;
age = 50;

let name: string;
name = "Max";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: any;
notInitialize = "string";
notInitialize = 2;

let callback = (a: number): number => {
  return 100 + a;
};
callback(50);

export {};
