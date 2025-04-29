export class StringBase {
    protected value: string;

    constructor(value: string) {
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }

    getLength(): number {
        return this.value.length;
    }
}