// boolean
let isActive: boolean = true;

function isEven(n: number): boolean {
  return n % 2 === 0;
}

// number
// 十進位
let decimalNumber: number = 6;

// 十六進位
let hexadecimalNumber: number = 0xf00d;

// 二進位 (ES6 中的二進位制表示法)
let binaryNumber: number = 0b1010;

// 八進位 (ES6 中的八進位制表示法)
let octalNumber: number = 0o744;

// NaN (Not a Number) 值，表示非數字結果
let notANumberValue: number = NaN;

// 無窮大數字值
let infinityValue: number = Infinity;

// string
let personName: string = "John";

function greet(person: string): string {
  return `Hello, ${person}!`;
}

// undefined & null
let undefinedValue: undefined = undefined;
let nullValue: null = null;

let x: number | null = null;
let y: string | undefined = undefined;

// void
function sayHi(): void {
  console.log("Hi!");
}

// any
let anything: any = "Hello";
anything = 42;
anything = [1, 2, 3];
anything.foo = "bar";
anything();

// unknown
let unknownValue: unknown = 30;
let stringValue: string = unknownValue as string;
