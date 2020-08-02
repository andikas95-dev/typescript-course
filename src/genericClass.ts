class List<T> {
    private data: T[];

    // Jika Menggunakan Rest Parameter
    constructor(...elements: T[]) {
        this.data = elements;
    }

    // Jika tidak Menggunakan Rest Parameter
    // constructor(elements: T[]) {
    //     this.data = elements;
    // }

    add(element: T): void {
        this.data.push(element);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

// Jika Menggunakan Rest Parameter
let numbers = new List<number>(1, 2, 3);
// Jika tidak menggunakan Rest Parameter
// let numbers = new List<number>([1, 2, 3]);

// numbers.add(4);
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll());

//bisa memberikan inisialisasi lebih dari 1 type
let random = new List<number | string>(1, "a", 2, "b");
random.add(3);
random.addMultiple("c", 4, "d", 5);
console.log(random.getAll());
