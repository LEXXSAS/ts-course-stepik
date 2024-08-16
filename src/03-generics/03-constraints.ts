function len<T extends {length: number}>(arg: T): number {
  return arg.length
}

len('abc')
len(['abc'])
len({length: 21})
const ob1 = {a: 1, length: 1}