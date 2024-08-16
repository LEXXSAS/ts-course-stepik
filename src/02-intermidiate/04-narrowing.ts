function example1(x?: number | string) {
  if (typeof x === 'string') {
    x.toLowerCase()
  } else if (typeof x === 'number') {
    x.toFixed()
  } else if (x === undefined) {
    console.log('no value')
  } else {
    x
  }
}

function example2(strs: string | string[] | null) {
  // if (strs && Object.keys(strs).length > 0) {}
  // if (Array.isArray(strs)) {}
  if (strs && typeof strs === 'object') {
    strs.forEach((el) => console.log(el))
  } else if (typeof strs === 'string') {
    strs.toLowerCase()
  }
}

function example3 (x: number[] | Date) {
   if (x instanceof Date) {
    x.getTime()
   } else {
    let arrNew1 = [1, 2, 3]
    x.concat(x, arrNew1)
   }
}

export type Fish = {swim: () => void}
type Bird = {fly: () => void}

function move(animal: Fish | Bird) {
  if ('swim' in animal) {
    return animal.swim()
  }

  return animal.fly()
}
