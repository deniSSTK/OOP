import { ExpressionError } from "./ExpressionError";

export class Expression {
    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public getValues(): [number, number] {
        return [this.a, this.b];
    }

    public calculate(): number {
        if (this.b === 0) throw new ExpressionError("Division by zero is not allowed");
        return this.a / this.b;
    }

    public getSqrtOfA(): number {
        if (this.a < 0) throw new ExpressionError("Square root of negative number is not allowed");
        return Math.sqrt(this.a);
    }
}
