"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGaming) {
        this.name = name;
        this.isGamming = isGaming;
    }
    Asus.prototype.on = function () {
        console.log("menyala");
    };
    Asus.prototype.off = function () {
        console.log("mematikan");
    };
    return Asus;
}());
var Macbook = /** @class */ (function () {
    function Macbook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    Macbook.prototype.on = function () {
        console.log("menyala");
    };
    Macbook.prototype.off = function () {
        console.log("mematikan");
    };
    return Macbook;
}());
var asus = new Asus("asus", true);
asus.on();
var mac = new Macbook("macbook", true);
mac.on();
