abstract class Vehicle {
    abstract wheels : number
    start () : void {
        console.log('bruum')
    }
}

class Car extends Vehicle {
    wheels : number = 4
}

let car = new Car()
car.wheels
car.start()