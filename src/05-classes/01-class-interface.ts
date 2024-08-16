interface ICar {
  go(speed: number): void,
  maxSpeed?: number
}

export class Car implements ICar{
  go(speed: number): void {
      console.log('Lets go', speed.toFixed())
  }
  stop() {
    console.log('Stopped')
  }
}

const car = new Car;
