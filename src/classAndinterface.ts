// constructor
class Greeter {
  private greeting: string;

  // constructor
  constructor(message: string) {
    // property
    this.greeting = message;
  }

  // method
  greet(): string {
    return `Hello, ${this.greeting}`;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

// Accessor
class Person1 {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    if (newName.length >= 2) {
      this._name = newName;
    } else {
      console.log("Name must have at least 2 characters.");
    }
  }
}

const person1 = new Person1("John");
console.log(person1.name); // Getter is called
person1.name = "A"; // Setter is called and error message is logged

// static properties and methods
class Helper {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(Helper.PI);
console.log(Helper.calcCircumference(8));

// Encapsulation
class Encapsulation {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  public get name(): string {
    return this._name;
  }

  public get age(): number {
    return this._age;
  }
}

const encapsulation = new Encapsulation("John", 20);
console.log(encapsulation.name);
console.log(encapsulation.age);

// # private fields
class Pet {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  public getName(): string {
    return this.#name;
  }

  public setName(newName: string): void {
    this.#name = newName;
  }
}

const animal = new Pet("Dog");
console.log(animal.getName()); // 輸出: "Dog"

animal.setName("Cat");

// Inheritance
class Animal1 {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
  public speak(): void {
    console.log(`${this.name} makes a noise.`);
  }
}

// 子類別 Dog1 繼承父類別 Animal1 的所有屬性和方法
class Dog1 extends Animal1 {
  constructor(name: string) {
    super(name); // 呼叫父類別的 constructor
  }

  public speak(): void {
    super.speak(); // 呼叫父類別的 speak 方法
  }
}
const dog1 = new Dog1("Mitzie");
dog1.speak(); // 顯示：Mitzie makes a noise.

// Polymorphism
class Cat extends Animal1 {
  constructor(name: string) {
    super(name);
  }

  public speak(): void {
    console.log(`${this.name} meow.`);
  }
}

const cat = new Cat("Josh");
cat.speak();

// abstract class
abstract class AbstractAnimal {
  constructor(public name: string) {}
  // 抽象方法
  abstract speak(): void;
}

class RealDog extends AbstractAnimal {
  speak(): void {
    console.log(`${this.name} 汪汪汪！`);
  }
}

class RealCat extends AbstractAnimal {
  speak(): void {
    console.log(`${this.name} 喵喵喵！`);
  }
}

let testDog = new RealDog("旺財");
let testCat = new RealCat("咪咪");
testDog.speak();
testCat.speak();

// interface implements
interface CanFly {
  fly(): void;
}

interface CanSwim {
  swim(): void;
}

class Bird extends AbstractAnimal implements CanFly {
  speak(): void {
    console.log("Chirp chirp!");
  }

  fly(): void {
    console.log("Flying in the sky!");
  }
}

class Fish extends AbstractAnimal implements CanSwim {
  speak(): void {
    console.log("Glub glub!");
  }

  swim(): void {
    console.log("Swimming in the water!");
  }
}

class Duck extends AbstractAnimal implements CanFly, CanSwim {
  speak(): void {
    console.log("Quack quack!");
  }

  fly(): void {
    console.log("Flying in the sky!");
  }

  swim(): void {
    console.log("Swimming in the water!");
  }
}

let bird = new Bird("Bird");
let fish = new Fish("Fish");
let duck = new Duck("Duck");
bird.fly();
fish.swim();
duck.fly();
