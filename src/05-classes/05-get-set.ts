export class Rectangle {
  constructor(public width: number, public height: number) {}

  get area(): number {
    return this.height + this.width;
  }
}

const rect1 = new Rectangle(20, 12);
// rect1.area()
rect1.area

export class Car {
  constructor(public color: string, private _maxSpeed: number) {}

  get speed(): number {
    return this._maxSpeed
  }

  set maxSpeed(speed: number) {
    if (speed > 0) {
      this._maxSpeed = speed
    }
  }
}

const c1 = new Car('green', 150)
