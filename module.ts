
interface Shape {
    getType(): string;
}

module Shapes {
    export class Circle implements Shape {
        getType(): string {
            return "circle";
        }
    }
}

let circle: Shape  = new Shapes.Circle();
let type: string = circle.getType();