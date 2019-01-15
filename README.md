# typescript-sandbox

This repository is a Typescript sandbox where I try&amp;test Typescript functionality

# Source Code

All Typescript source files base on Typescript version  3.1.
All source file represent sample code where I tried out Typescript functionality.

## Commands

To compile a typescript into Javascript and run it with `node`.

    tsc ts-file | node js-file.js

## Typescript List

This list contains some text excerpts and type script keywords which I found important when reading the type script documentation

- https://www.typescriptlang.org/docs
- Typescript is a superset of Javascript
- Type inference
- Type assertion (casting)
- *var* declarations have some odd scoping rules
- By default null and undefined are subtypes of all other types
- The *never* type represents the type of values that never occur
- The *never* type is a subtype of, and assignable to, every type
- Spread operator (spread operator is the opposite of destructuring)
- Variable capturing
- Indexable Types ( e.g.: numbers[12] or personsMap["Alex"] )
- Union Types ( Person | Animal )
- Block Scoping
- Re-declarations
- Shadowing (The act of introducing a new name in a more nested scope)
- Block-scoped variable capturing
- IIFE - an Immediately Invoked Function Expression
- Destructuring
- Interface with call signature (Function Types)
- Typescript has contextual typing
- Indexable Types (with index signatures), two types (string, number)
- Construct signatures in interfaces are not implementable in classes
- A class implementing an interface is a contract on what an instance of the class has
- Like classes, interfaces can extend each other
- Difference between the static and instance sides of classes
- A Class has two sides to its type: the static side and the instance side
- Interfaces extending classes (inherits members but not implementations)
- Classes inherit properties and methods from base classes
- In TypeScript, each member is *public* by default
- A class constructor may also be marked protected (this class can then only be extended)
- Readonly modifier
- Constructor Parameter properties are declared by prefixing a parameter with an accessibility modifier or readonly
- Accessors (getters,setters)
- Class static properties
- Contextual Typing
- Arrow functions  => (lambdas)
- Arrow functions capture the *this* where the function is created
- Arrow functions don't capture *this*, they use it from its enclosing environment
- Arrow functions cannot be used as constructors
- In JavaScript, *this* is a variable that’s set when a function is called
- *this* parameters are fake parameters that come first in the parameter list of a function
- Generics, Type argument inference
- Generic classes are only generic over their instance side
- Putting constraints on generic types (keyof)
- Enums are real objects that exist at runtime
- Ambient enums (describe shape of already existing enum types)
- Type compatibility (structural typing)
- Type compatibility: only members of target type are considered when checking for compat.
- Modules are executed in their own scope, not in the global scope
- One have to use export and import forms to use module members
- Modules are declarative
- Modules import one another using a module loader ( Common.js or require.js )
- Any declaration can be exported by adding the export keyword

