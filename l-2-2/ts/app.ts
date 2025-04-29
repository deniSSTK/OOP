import { Figure } from "./base/Figure";
import { Triangle } from "./derived/Triangle";
import { Circle } from "./derived/Circle";

function printFigureInfo(figure: Figure): void {
    console.log("Area:", figure.getArea());
    console.log("Perimeter:", figure.getPerimeter());
}

const triangle = new Triangle(0, 0, 4, 0, 0, 3);
const circle = new Circle(5);

console.log("=== Triangle ===");
printFigureInfo(triangle);

console.log("\n=== Circle ===");
printFigureInfo(circle);
