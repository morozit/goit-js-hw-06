class Car {
  // Write code under this line

  constructor(specs, speed = 0, isOn = false, distance = 0) {
    this.maxSpeed = specs.maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = specs.price;
  }
  static getSpecs({ maxSpeed, speed, isOn, distance, price }) {
    return `maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`;
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }
  accelerate(value) {
    if (this.turnOn) {
      this.speed =
        this.speed + value <= this.maxSpeed
          ? this.speed + value
          : this.maxSpeed;
    }
  }

  decelerate(value) {
    if (this.turnOn) {
      this.speed = this.speed - value > 0 ? this.speed - value : 0;
    }
  }

  drive(hours) {
    if (this.turnOn) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
