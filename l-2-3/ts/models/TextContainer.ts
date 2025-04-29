import { TextRow } from "./TextRow";

export class TextContainer {
    private rows: TextRow[] = [];

    addRow(row: TextRow): void {
        this.rows.push(row);
    }

    removeRow(index: number): void {
        if (index >= 0 && index < this.rows.length) {
            this.rows.splice(index, 1);
        }
    }

    removeRowsContaining(substring: string): void {
        this.rows = this.rows.filter(row => !row.getContent().includes(substring));
    }

    clear(): void {
        this.rows = [];
    }

    getLongestRowLength(): number {
        if (this.rows.length === 0) return 0;
        return Math.max(...this.rows.map(row => row.getLength()));
    }

    capitalizeAllRows(): void {
        for (const row of this.rows) {
            row.capitalizeWords();
        }
    }

    getAllRows(): string[] {
        return this.rows.map(row => row.getContent());
    }
}
