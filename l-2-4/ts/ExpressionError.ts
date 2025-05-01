export class ExpressionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ExpressionError";
    }
}
