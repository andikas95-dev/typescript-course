"use strict";
var List = /** @class */ (function () {
    // Jika Menggunakan Rest Parameter
    function List() {
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        this.data = elements;
    }
    // Jika tidak Menggunakan Rest Parameter
    // constructor(elements: T[]) {
    //     this.data = elements;
    // }
    List.prototype.add = function (element) {
        this.data.push(element);
    };
    List.prototype.addMultiple = function () {
        var _a;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        (_a = this.data).push.apply(_a, elements);
    };
    List.prototype.getAll = function () {
        return this.data;
    };
    return List;
}());
// Jika Menggunakan Rest Parameter
var numbers = new List(1, 2, 3);
// Jika tidak menggunakan Rest Parameter
// let numbers = new List<number>([1, 2, 3]);
// numbers.add(4);
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll());
//bisa memberikan inisialisasi lebih dari 1 type
var random = new List(1, "a", 2, "b");
random.add(3);
random.addMultiple("c", 4, "d", 5);
console.log(random.getAll());
