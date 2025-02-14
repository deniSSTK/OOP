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
            let list: number[] = [];
            args.map((item) => {
                list.push(stringManipulator.lengthCalc(item));
            });
            return list;
        }
    }

    private static lengthCalc(str: string): number {
        return Array.from(str).reduce(acc => acc + 1, 0);
    }
}

