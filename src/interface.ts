interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGamming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGamming = isGaming;
    }
    on(): void {
        console.log("menyala");
    }
    off(): void {
        console.log("mematikan");
    }
}

class Macbook implements Laptop {
    name: string;
    keyboardLight: boolean;
    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log("menyala");
    }
    off(): void {
        console.log("mematikan");
    }
}

let asus = new Asus("asus", true);
asus.on();
let mac = new Macbook("macbook", true);
mac.on();
