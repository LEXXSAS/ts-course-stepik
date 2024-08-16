type Fish = {swim: () => void}
type Bird = {fly: () => void}

// function isFish(pet: Fish | Bird): pet is Fish {
//   return (pet as Fish) !== undefined;
// }

function isFish(pet: Fish | Bird): pet is Fish {
  return true;
}

function move(animal: Fish | Bird) {
  if (isFish(animal)) {
    return animal.swim()
  }

  return animal.fly()
}
