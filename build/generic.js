"use strict";
// sebuah type data yang dinamis
function getData(value) {
    return value;
}
console.log(getData("Andika").length);
// jika menggunakan any lalu ada function length maka number akan teridentifikasi undefined
console.log(getData(123).length);
//Cara Menggunakan Generic
// Kenapa <T> ? sebenarnya bisa dikasih nama apapun tapi standart programing diluar biasa menggunakan <T>
function myData(value) {
    return value;
}
console.log(myData("Andika").length);
// jika number diisi length maka akan error jadi yang keluar hanya fungsi yand dikhususkan untuk number saja
// coba di uncomment
// console.log(myData(123).length);
// jika dalam arrow of function seperti dibawah
var arrowFunc0 = function (value) {
    return value;
};
// Jika di dalam JSX
var arrowFunc = function (value) {
    return value;
};
var arrowFunc2 = function (value) {
    return value;
};
var arrowFunc3 = function (value) {
    return value;
};
