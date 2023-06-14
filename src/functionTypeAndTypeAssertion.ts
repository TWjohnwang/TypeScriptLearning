// function type
// function declaration
function add(x: number, y: number): number {
  return x + y;
}

// function expression
const addNumbers = function (x: number, y: number): number {
  return x + y;
};

const addNumber: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// using interface to define function type
interface AddFn {
  (x: number, y: number): number;
}

const addFn: AddFn = (x: number, y: number): number => {
  return x + y;
};

// type alias
type AddFnType = (x: number, y: number) => number;

const addFnType: AddFnType = (x: number, y: number): number => {
  return x + y;
};

// optional parameters
function sayHello(name: string, age?: number): string {
  if (age) {
    return `Hello, my name is ${name}, I am ${age} years old`;
  }
  return `Hello, my name is ${name}`;
}

console.log(sayHello("John"));
console.log(sayHello("John", 20));

// default parameters
function sayHelloDefault(name: string, age: number = 20): string {
  return `Hello, my name is ${name}, I am ${age} years old`;
}

console.log(sayHelloDefault("John"));
console.log(sayHelloDefault("John", 26));

// rest parameters
function addRest(...numbers: number[]): number {
  return numbers.reduce((acc: number, cur: number) => acc + cur);
}

console.log(addRest(1, 2, 3, 4, 5));

// overloads
function overloadAdd(x: number, y: number): number;
function overloadAdd(x: string, y: string): string;
function overloadAdd(
  x: number | string,
  y: number | string
): number | string | void {
  if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else if (typeof x === "string" && typeof y === "string") {
    return x.concat(y);
  }
}

console.log(overloadAdd(1, 2));
console.log(overloadAdd("1", "2"));

// type assertion
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

const myCanvas2 = document.getElementById("main_canvas") as HTMLCanvasElement;
