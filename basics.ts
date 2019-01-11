export {};

// comment
/* comment */
/** comment */

// NUMBERS
let double: number = 10.33;
let double2: number = 10e22;
let sum: number = 1 + 1;
let int: number = 10;
let hex: number = 0xABC;
let binary: number = 0b10101010;
let octal: number = 0o1234567;

int.toExponential();
int.toFixed();
int.toLocaleString("de");

// STRINGS
let s: string;
let s2: string = "initialized";
let s3: string = "A" + "B" + "C";
let s4: string = "CamelCase".toLocaleLowerCase();
let s5: string = "a b  ".trim();
let name: string = "David";
let template: string = "Hello ${ david }";

// ENUMS
enum RGB { RED, GREEN, BLUE};
enum LAMP {ON = "Lampe an", OFF = "Lampe aus"};
let r: number = RGB.RED;

// ANY
let person: any = {"firstname" : "Alexander","lastname":"Gerst"};
let n: any = 1;

// BOOLS
let a: boolean;
let b: boolean = true;

// ARRAY
let ar: number[] = [1,2,3];
let ar2: Array<number> ;
let ar3: Array<string> ;
let colors: Array<string> = ["A","B","C"];

colors.forEach((value,index,array) => console.log("idx:" + index + ", v:" + value));

class Customer {
    constructor(public name:string){};
}
let customers: Array<Customer>;
customers = [{name: "Georg"}];
console.log(customers);



let customers2: Customer[];
let customersInitialized: Array<Customer> = [];
let custs = [new Customer("Holger")];

console.log(custs);

// TUPLES
let t: [string, number];
t = ["key", 11];

// VOID
let v: void = undefined;
let v2: void = null;

// CONST
const ABC = "ABC";
const NUM = 123;
const OBJ = {
    name: "Name",
    birthday: "12.12.2000",
};

// NULL
let nil: null;
let nil2: null = null;

// NEVER
function throwError() : never {
    throw new Error();
}

// SYMBOL
let u: symbol ;

// TYPECAST
let ss: any = "Hello";
let ssa: string = (ss as string);


