//tipe data pada balikan function

function getNama(): string {
    return "nama saya andika";
}
// console.log(getNama());

function getAge(): number {
    return 20;
}
// console.log(getAge());

//void dipakai jika function tidak memiliki data kembalian / return
function printName(): void {
    console.log("nama saya andika perdana");
}

// printName();

//////////////
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}

console.log(multiply(2, 5));

//function as type
type Tambah = (val1: number, val2: number) => number;

const Add: Tambah = (val1: number, val2: number): number => {
    return val1 + val2;
};

console.log(Add(2, 3));

//default parameter
const fullName = (firstName: string, lastName: string = "perdana"): string => {
    return `${firstName} ${lastName}`;
};
// console.log(fullName("Andika"));

//Optional Parameter
//di deklarasikan dengan tanda tanya dimana jika nanti tidak diisi nilai yang keluar adalah undefined
// jika diisi string dan val2 kosong maka akan ada error
const getName1 = (val1: string, val2?: string): string => {
    return `${val1} ${val2}`;
};

console.log(getName1("a"));
