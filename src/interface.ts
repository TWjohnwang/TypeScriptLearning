// object structure
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "John",
  age: 26,
};

// function type
interface Drive {
  (speed: number): void;
}

const drive: Drive = (speed) => {
  console.log(`Driving at ${speed} km/h`);
};

// interface implements
interface Animal {
  name: string;
  age: number;
  eat(): void;
  sleep(): void;
}

class Dog implements Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat(): void {
    console.log(`${this.name} is eating`);
  }

  sleep(): void {
    console.log(`${this.name} is sleeping`);
  }
}

const dog = new Dog("Bobby", 2);
dog.eat();
dog.sleep();

// index signature
interface Person {
  name: string;
  age: number;
  [key: string]: any;
}

const person2: Person = {
  name: "John",
  age: 26,
  hobbies: ["Reading", "Coding"],
};

person2.hobbies.forEach((hobby: string) => console.log(hobby));

// optional properties
interface Person {
  name: string;
  age: number;
  phone?: number;
}

const person3: Person = {
  name: "John",
  age: 26,
  phone: 1234567890,
};

const person4: Person = {
  name: "John",
  age: 26,
};

// readonly properties
interface Person {
  name: string;
  age: number;
  readonly height?: number;
}

// index signature
interface PersonTwo {
  name: string;
  age: number;
  [key: string]: any;
}

const person5: PersonTwo = {
  name: "John",
  age: 26,
  height: 175,
  hobby: "reading",
};
