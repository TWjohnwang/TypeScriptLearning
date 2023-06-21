// tuple
type Tuple = [number, string, boolean];
const tuple: Tuple = [1, "hello", true];

const num: number = tuple[0];
const str: string = tuple[1];
const bool: boolean = tuple[2];

// enum
enum Color {
  Red,
  Green,
  Blue,
}
const color: Color = Color.Red;

// constant members
enum Days {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

// computed members
enum FileAccess {
  G = "123".length,
}

// const enums
const enum Directions {
  Up,
  Down,
  Left,
  Right,
}

let directions = [
  Directions.Up,
  Directions.Down,
  Directions.Left,
  Directions.Right,
];
