import { ICaseChanger } from "../interfaces/ICaseChanger";

export class TextRow implements ICaseChanger {
    private content: string;

    constructor(content: string) {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }

    setContent(newContent: string): void {
        this.content = newContent;
    }

    getLength(): number {
        return this.content.length;
    }

    capitalizeWords(): void {
        this.content = this.content.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
}
