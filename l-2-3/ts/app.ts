import { TextRow } from "./models/TextRow";
import { TextContainer } from "./models/TextContainer";

const container = new TextContainer();

container.addRow(new TextRow("hello world"));
container.addRow(new TextRow("typescript"));
container.addRow(new TextRow("this is typescript"));
container.addRow(new TextRow("object oriented programming"));

console.log("Original rows:");
console.log(container.getAllRows());

container.capitalizeAllRows();

console.log("\nAfter capitalizing first letters:");
console.log(container.getAllRows());

console.log("\nLongest row length:", container.getLongestRowLength());

container.removeRowsContaining(" typescript");

console.log("\nAfter removing rows containing 'typescript':");
console.log(container.getAllRows());

container.clear();

console.log("\nAfter clearing:");
console.log(container.getAllRows());
