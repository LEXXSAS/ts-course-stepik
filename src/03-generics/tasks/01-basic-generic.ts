function append<T>(el: T, list: T[]): T[]
function append(el: any, list: any) {
  return list.concat(el)
}

const valAppend1 = append(123, [333])
console.log(valAppend1)