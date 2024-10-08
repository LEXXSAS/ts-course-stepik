export class Vehicle {
  public drive(speed: number): void {
    console.log(' Let us go with speed', speed.toFixed())
    this.#log(speed)
  }
  public stop() {
    console.log('Stopped')
  }
  #log(speed: number) {
    console.log('Vehicle has changed speed to', speed)
  }
  protected alternativeLog(text: string) {
    console.log(text)
  }
}

class Car extends Vehicle {
  public changeSpeed(speed: number) {
    this.drive(speed)
    this.alternativeLog('test 01')
  }
}

const car1 = new Car();
car1.drive(55)
car1.stop()
