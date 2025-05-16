class TextBlock {
    private lines: string[];

    constructor(lines: string[]) {this.lines = lines}

    getLineLength(index: number): number {
        if (index >= 0 && index < this.lines.length) {
            return this.lines[index].length;
        }
        throw new Error("Index out of bounds");
    }

    get vowelCount(): number {
        const vowels = "aeiouаеєиіїоуюяAEIOUАЕЄИІЇОУЮЯ";
        return this.lines.join("").split("").filter(char => vowels.includes(char)).length;
    }
}