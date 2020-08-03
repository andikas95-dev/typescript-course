//berisi method atau properti yang bisa dimanfaatkan oleh child

import ILaptop from "./Ilaptop";
import * as Keyboard from "./keyboard";
import { b } from "./keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
    name: string;
    type: any;
    withNumeric: boolean;
    withTouchButton: boolean;

    constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }

    a(): void {
        console.log(Keyboard.a());
    }

    b(): void {
        console.log(Keyboard.b());
    }
}

export default BaseLaptop;
