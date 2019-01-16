export {};

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    name: string;
}

// OPTIONAL PROPERTIES
interface Questenaire {
    question1?: string;
    question2?: string;
}

// readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };

class Animal {
    name: string;
}

// Extension
class Dog extends Animal {
    breed: string;
}

// Indexing
interface Animals {
    [x: number]: Dog;
    [x: string]: Animal;        
}

class Hello {
    public aPublicNumber: number;
    protected aProtectedNumber: number;
    private aPrivateNumber:number;
    aNumber: number;
}


let animals: Animals;
animals[1] = new Dog();
console.log("Animals: "+animals);

interface StringArray {
    // number is the index type
    // string is the return type
    [index: number]: string;
}

let myArray : StringArray;
myArray = ["Hello","hi"];

console.log(myArray);
// [ 'Hello', 'hi' ]

// Function Types
interface SearchFunction {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunction;
mySearch = function(source: string, sub: string):boolean {
    let result = source.search(sub);
    return result > -1;
}

class ClassWithStaticMembers {
    static member: string = "static member with type";
    static member2 = "static member with inferred type";
}