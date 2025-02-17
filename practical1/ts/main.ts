import {stringManipulator} from "../../1/ts/main";

export class StringManipulatorEncapsulation {
    private text: string;
    private textLength: number;

    constructor(text: string) {
        this.text = text;
        this.textLength = stringManipulator.getLength(text) as number;

    }

    public getText(): string {
        return this.text;
    }

    public setText(text: string): void {
        this.text = text;
        this.textLength = stringManipulator.getLength(text) as number;
    }

    public getTextLength() {
        return this.textLength;
    }
}

const manipulator1 = new StringManipulatorEncapsulation("hello");
console.log("Object 1 created:", manipulator1);
console.log("Text of object 1:", manipulator1.getText());
console.log("Text length of object 1:", manipulator1.getTextLength());

const manipulator2 = new StringManipulatorEncapsulation("world");
console.log("\nObject 2 created:", manipulator2);
console.log("Text of object 2:", manipulator2.getText());
console.log("Text length of object 2:", manipulator2.getTextLength());

manipulator2.setText("new world");
console.log("\nObject 2 after setText:", manipulator2);
console.log("Text of object 2:", manipulator2.getText());
console.log("Text length of object 2:", manipulator2.getTextLength());