import { StringBase } from "../base/String";

export class DigitalString extends StringBase {
    constructor(value: string) {
        super(value);
    }

    reverse(): string {
        return this.value.split('').reverse().join('');
    }
}