import { Figure } from "../base/Figure";

export class Circle extends Figure {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
