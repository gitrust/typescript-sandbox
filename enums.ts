
enum Colors {
    RED,
    GREEN,
    BLUE
}

let red: number = Colors.RED; // => 0

// reverse mapping
let nameOfColor: string = Colors[red]; // => RED

let cls = Colors.RED & Colors.GREEN & Colors.BLUE;

// const enums
const enum NUMBERS {
    ONE, // = 0 
    TWO, // = 1
    THREE
}

// Const enums can only use constant enum expressions

// Ambient enums
enum MyEnum {
    A = 1,
    B, // = 2
    C =2  
}