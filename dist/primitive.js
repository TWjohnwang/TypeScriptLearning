"use strict";
// boolean
let isActive = true;
function isEven(n) {
    return n % 2 === 0;
}
// number
// 十進位
let decimalNumber = 6;
// 十六進位
let hexadecimalNumber = 0xf00d;
// 二進位 (ES6 中的二進位制表示法)
let binaryNumber = 0b1010;
// 八進位 (ES6 中的八進位制表示法)
let octalNumber = 0o744;
// NaN (Not a Number) 值，表示非數字結果
let notANumberValue = NaN;
// 無窮大數字值
let infinityValue = Infinity;
// string
let personName = "John";
function greet(person) {
    return `Hello, ${person}!`;
}
// undefined & null
let undefinedValue = undefined;
let nullValue = null;
let x = null;
let y = undefined;
// void
function sayHi() {
    console.log("Hi!");
}
// any
let anything = "Hello";
anything = 42;
anything = [1, 2, 3];
anything.foo = "bar";
anything();
// unknown
let unknownValue = 30;
let stringValue = unknownValue;
