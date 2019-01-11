export { }

// named function
function add(x, y) {
    return x + y;
}
add(1, 2);



// anonymous function
let myAdd = function (x, y) { return x + y };
myAdd(1, 2);

// functions captures a variable
let z: number = 10;

function addToZ(x: number, y: number) {
    return z + x + y;
}

// typing a function
function typedAdd(x: number, y: number): number {
    return x + y;
}
typedAdd(1, 2);

// full type of a function
let multiply: (x: number, y: number) => number;
multiply = function (x: number, y: number): number { return x + y };
multiply(1, 2);

// optional parameters
let buildName = function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    } else {
        return firstName;
    }
}
console.log(buildName("Horst"));
console.log(buildName("Horst","Seehofer"));

// default initialized parameters
let buildPersonName = function buildPersonName(firstName: string, lastName = "Mustermann") {
    return firstName + " " + lastName;
}
let name = buildPersonName("Alex");
console.log(name);
name = buildPersonName("Alex","Gerald");
console.log(name);

// REst Parameters
let myLongName = function buildLongName(firstName: string, ...restParams: string[]) {
    return firstName + " " + restParams.join(" ");
}

// Math functions
let myNumbers = function randomNumbers(count:number):string{
    let s: string[] = [];
    for (let i=0;i<count;i++) {
        s.push("" + Math.floor(Math.random() * 20));
    }
    return s.join(",");
}
console.log(myNumbers(20));

function createRandomArray(count:number) {
    // Arrow function 
    let contentCreator = () => { 
        return Math.floor(Math.random()*20);
    };
    return new Array(count).fill(contentCreator());
}
console.log("Array:" +  createRandomArray(20));

// *this* is the first parameter in a function
// this void makes this unusable 
function aFunction(this:void,s:string): void{
}

let x = () => ({name: "Alice"});
let xName = x.name;