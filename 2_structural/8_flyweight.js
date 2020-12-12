// when you don't want to download some data again
class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }
  add(model, price) {
    const candidate = this.getCar(model);
    if (candidate) return candidate;

    const car = new Car(model, price);
    this.cars.push(car);
    return car;
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const factory = new CarFactory();

const bmw = factory.add('bmw', 2000);
const bmwX6 = factory.add('bmw', 4000);

console.log(bmw);
console.log(bmwX6);
