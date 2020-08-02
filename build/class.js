"use strict";
//ada 2 cara untuk deklarasi seperti dibawah
// export class User {
//     public name: string;
//     constructor(nama: string) {
//         this.name = nama;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, phone) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write,
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = "email salah";
            }
            else {
                this._email = value;
            }
        },
        enumerable: false,
        configurable: true
    });
    Admin.getRoleName = "Admin";
    return Admin;
}(User));
var admin = Admin.getRoleName;
console.log(admin);
