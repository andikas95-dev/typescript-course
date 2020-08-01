//ada 2 cara untuk deklarasi seperti dibawah
// export class User {
//     public name: string;
//     constructor(nama: string) {
//         this.name = nama;
//     }
// }

// export class User {
//     constructor(public name: string, public age: number) {}
// }

// var user = new User("andika", 25);
// console.log(user);

export class User {
    name: string;

    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = (): string => {
        return this.name;
    };
}

// public = bisa di akses di semua class /di luar class tsb
// protected = hanya bisa di akses dari class tersebut, dan klass turunannya
// private = hanya bisa di akses dari class itu sendiri
