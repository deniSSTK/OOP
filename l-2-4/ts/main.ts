import { Expression } from "./Expression";

const expressions: Expression[] = [
    new Expression(10, 2),
    new Expression(5, 0),
    new Expression(-4, 1),
];

expressions.forEach((expr, index) => {
    console.log(`Expression ${index + 1}:`, expr.getValues());
    try {
        console.log(`Result: ${expr.calculate()}`);
    } catch (e) {
        console.error(`Calculation Error: ${(e as Error).message}`);
    }

    try {
        console.log(`Sqrt(a): ${expr.getSqrtOfA()}`);
    } catch (e) {
        console.error(`Sqrt Error: ${(e as Error).message}`);
    }
});
