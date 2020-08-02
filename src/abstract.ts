abstract class Vehicle {
    abstract wheels: number;

    start(): void {
        console.log("brummm");
    }
}

class Car extends Vehicle {
    wheels: number = 4;
}

class Bike extends Vehicle {
    wheels: number = 2;
}

let car = new Car();
car.start();
console.log(car);

let bike = new Bike();
bike.start();
console.log(bike);
