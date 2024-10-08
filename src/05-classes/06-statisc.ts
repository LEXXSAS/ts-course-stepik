export class Circle {
  protected static pi: number = 3.14;

  static calculateArea(radius: number) {
    return this.pi * radius * radius;
  }

  constructor(public radius: number) {}

  get area() {
    return Circle.pi * this.radius * this.radius
  }
}

const c1 = new Circle(20);
Circle.calculateArea(10);

class Ellipse extends Circle {
  constructor(public radius: number) {
    super(radius)
    Circle.pi
  }
}
