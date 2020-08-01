"use strict";
// Enum = sebuah type data yang menyimpan data constant seperti .env
//bedanya kalau .env menyimpan data constant di level konfigurasi
//sedangkan enum menyimpan data constant di level aplikasi
//numeric enum
// enum Month {
//     JAN = 1,
//     FEB = 100,
//     MAR,
//     APR,
//     MEI,
//     JUN,
//     JUL,
// }
//Akan ada angka yang tampil ketika di console, dan angka biasanya dimulai dari 0
//angka bisa diubah mengikuti apa yang kita inginkan, seperti angka di januari dimulai dari 1 maka yang lain akan ikut
////////////////////////////////////console.log(Month);
//untuk mendapatkan detail
////////////////////////////////////console.log(Month.FEB);
//string enum
var Month;
(function (Month) {
    Month["JAN"] = "Januari";
    Month["FEB"] = "Februari";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
})(Month || (Month = {}));
console.log(Month);
