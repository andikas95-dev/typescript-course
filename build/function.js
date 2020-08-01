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
// console.log(fullName("Andika"));
//Optional Parameter
//di deklarasikan dengan tanda tanya dimana jika nanti tidak diisi nilai yang keluar adalah undefined
// jika diisi string dan val2 kosong maka akan ada error intinya jika number tidak boleh menggunakan optional
var getName1 = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getName1("a"));
