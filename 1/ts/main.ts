export class stringManipulator {
    readonly value: string;
    readonly length: number;

    constructor(value: string) {
        this.value = value;
        //@ts-ignore
        this.length = stringManipulator.getLength(value);
    }

    static getLength(...args: string[]): number | number[]{
        if (args.length <= 1) {
            return stringManipulator.lengthCalc(args[0]);
        } else {
            return args.map((item) => {
                return stringManipulator.lengthCalc(item);
            });
        }
    }

    private static lengthCalc(str: string): number {
        return Array.from(str).reduce(acc => acc + 1, 0);
    }
}

