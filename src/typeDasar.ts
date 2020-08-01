// type deklarasi penulisan typescript
let contoh1 = "test";

let contoh: string = "test";

let contoh3: string;
contoh3 = "test";

type Contoh4 = number;
let contoh4: Contoh4 = 30;

// type Data String
let nama = "Andika";
let buah: string = "pisang";
// akan error ketika diisi selain string

// type Data Number
let angka: number = 20;

//type Data Boolean
let isMarried: boolean = true;

//type Data Any = Type data yang isinya bisa diisi apapun, dari string bisa jadi angka dll
let mancing: any = "ayok";
mancing = 50000;

//Union type adalah kita bisa menentukan pada sebuah variabel lebih dari 1 type

// pada phone type number 0 akan dihilangkan itu bisa diubah menjadi string
let phone: string | number;
phone = 62813;
phone = "0813";
