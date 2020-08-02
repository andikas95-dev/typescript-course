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

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";

    constructor(name: string, age: number, phone: string) {
        super(name, age);
        this.phone = phone;
    }

    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }

    set email(value: string) {
        if (value.length < 5) {
            this._email = "email salah";
        } else {
            this._email = value;
        }
    }

    get email(): string {
        return this._email;
    }
}

let admin = new Admin("andika", 25, "081333653541");
admin.email = "anom";
console.log(admin);
