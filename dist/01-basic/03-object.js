"use strict";
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
    isNew: true
};
car.name = 'MyCar';
delete car.name;
delete car.isNew;
// car.go = true
car['go'] = true;
console.log(car);
