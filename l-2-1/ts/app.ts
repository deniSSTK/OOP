import { DigitalString } from "./derived/DigitalString";

const digitalStr = new DigitalString("123456789");

console.log("String:", digitalStr.getValue());
console.log("String length:", digitalStr.getLength());
console.log("Reverse string:", digitalStr.reverse());