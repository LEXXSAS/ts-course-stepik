interface Car {
  wheels: number;
  brand: string;
  type: string;
  isNew?: boolean;
  name?: string;
  [key: string]: unknown;
}

const car: Car = {
  wheels: 4,
  brand: 'BMW',
  type: 'Sedan',
  isNew: true
}

car.name = 'MyCar'
delete car.name
delete car.isNew
// car.go = true
car['go'] = true
console.log(car)
