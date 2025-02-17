export class StringManipulator {
    readonly str: string;
    readonly method?: "plus" | "multiple" | "upperCase" | "multipleItself";
    readonly secondStr?: string;
    readonly multipleNumber?: number;

    constructor(str: string, method?: "plus" | "multiple" | "upperCase", param?: string | number) {
        if (method === "plus" && typeof param === "string") {
            this.str = str + param;
            this.secondStr = param;
            this.method = method;
        } else if (method === "multiple" && typeof param === "number") {
            this.str = str.repeat(param);
            this.multipleNumber = param;
            this.method = method;
        } else if (method === "upperCase") {
            this.str = str.toUpperCase();
            this.method = method;
        } else {
            this.str = str;
        }
    }
}

console.log("Creating an object with a default string:");
console.log(new StringManipulator("masha"));

console.log("\nConverting string to UPPERCASE:");
console.log(new StringManipulator("masha", "upperCase"));

console.log("\nRepeating the string multiple times:");
console.log(new StringManipulator("denis", "multiple", 2));

console.log("\nAttempting to repeat the string WITHOUT a count (should not multiply):");
console.log(new StringManipulator("multiple without param", "multiple"));

console.log("\nConcatenating two strings:");
console.log(new StringManipulator("string 1 ", "plus", "string 2"));
