// sebuah type data yang dinamis

function getData(value: any) {
    return value;
}

console.log(getData("Andika").length);
// jika menggunakan any lalu ada function length maka number akan teridentifikasi undefined
console.log(getData(123).length);

//Cara Menggunakan Generic
// Kenapa <T> ? sebenarnya bisa dikasih nama apapun tapi standart programing diluar biasa menggunakan <T>
function myData<T>(value: T) {
    return value;
}

console.log(myData("Andika").length);
// jika number diisi length maka akan error jadi yang keluar hanya fungsi yand dikhususkan untuk number saja
// coba di uncomment
// console.log(myData(123).length);

// jika dalam arrow of function seperti dibawah
const arrowFunc0 = <T>(value: T) => {
    return value;
};
// Jika di dalam JSX
const arrowFunc = <T>(value: T) => {
    return value;
};

const arrowFunc2 = <T extends {}>(value: T) => {
    return value;
};

const arrowFunc3 = <T extends unknown>(value: T) => {
    return value;
};
