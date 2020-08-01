"use strict";
//ada 2 cara untuk deklarasi seperti dibawah
// export class User {
//     public name: string;
//     constructor(nama: string) {
//         this.name = nama;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// export class User {
//     constructor(public name: string, public age: number) {}
// }
// var user = new User("andika", 25);
// console.log(user);
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.age = age;
        this.getName = function () {
            return _this.name;
        };
        this.name = name;
    }
    User.prototype.setName = function (value) {
        this.name = value;
    };
    return User;
}());
exports.User = User;
// public = bisa di akses di semua class /di luar class tsb
// protected = hanya bisa di akses dari class tersebut, dan klass turunannya
// private = hanya bisa di akses dari class itu sendiri
