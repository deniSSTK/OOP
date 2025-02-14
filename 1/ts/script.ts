import {stringManipulator} from "./main";

const stringManipulatorObject = new stringManipulator("str example");

const printSettings: Record<string, string | number | number[]> = {
    "stringManipulator Object value": stringManipulatorObject.value,
    "stringManipulator Object length": stringManipulatorObject.length,
    "stringManipulator static method getValue with 1 string": stringManipulator.getLength("EXAMPLE"),
    "stringManipulator static method getValue with 2+ strings": JSON.stringify(stringManipulator.getLength("EXAMPLE", "example example", "EXAMPLE123")),
}

for (const i in printSettings) {
    console.log(`${i} - ${printSettings[i]}`);
}