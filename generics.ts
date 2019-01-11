export {}

function identity<T>(arg: T) : T {
    return arg;
}

function ident<T>(arg: T[]) : T[] {
    console.log(arg.length);
    return arg;
}

function ident3<T>(arg: Array<T>): Array<T> {
    return arg;
}

// generic definition as a call signature
let myIdentity : {<T> (arg: T) : T} = identity;

// interface definition using Generics
interface GenericIdentityIterface {
    // Type parameter for this method only
    <T> (arg: T) : T;
}

// we can also define Type parameter for the whole interface
// makes this type parameter visible to all members of this interface
interface GenericIdentity<T> {
     (arg: T) : T;
}

// function definition using generics
function id<T>(arg: T) : T {
    return arg;
}

// define variable using Interface and assign a function to it
let myGenericFunction : GenericIdentityIterface = id;
let myStringIdFunction: GenericIdentity<string> = id;

// call myIdFunction
myGenericFunction(12);
myStringIdFunction("1111");


// an interface with a .length property
interface WithLengthProperty {
    length: number;
}

// function definition 
function logIdentity<T extends WithLengthProperty>(arg: T) : T {
    console.log(arg.length);
    return arg;
}

// call it
logIdentity({length: 12});
logIdentity(new Array());
logIdentity(new Array()[1] = [2,2]);

class Animal {
    numLegs: number;
}

// uses the prototype property to infer and constrain relationships between 
// the constructor function and the instance side of class types
function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}