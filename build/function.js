"use strict";
//tipe data pada balikan function
function getNama() {
    return "nama saya andika";
}
// console.log(getNama());
function getAge() {
    return 20;
}
// console.log(getAge());
//void dipakai jika function tidak memiliki data kembalian / return
function printName() {
    console.log("nama saya andika perdana");
}
// printName();
//////////////
function multiply(val1, val2) {
    return val1 * val2;
}
console.log(multiply(2, 5));
var Add = function (val1, val2) {
    return val1 + val2;
};
console.log(Add(2, 3));
//default parameter
var fullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "perdana"; }
    return firstName + " " + lastName;
};
console.log(fullName("Andika"));
