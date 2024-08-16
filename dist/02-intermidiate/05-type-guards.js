"use strict";
// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish) !== undefined;
// }
function isFish(pet) {
    return true;
}
function move(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
