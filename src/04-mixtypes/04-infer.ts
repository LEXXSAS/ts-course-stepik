function fromPair(pair: [string, string]) {
  const [key, value] = pair;

  return {
    [key]: value
  }
}

type FirstArg<T> = T extends (first: infer First, ...args: any[]) => any ? First : never

const myPair: FirstArg<typeof fromPair> = ['myKey', 'myValue']

fromPair(myPair)
// fromPair(myPair as [string, string])

type ConstructorFirstArg<T> = T extends {new(arg: infer A, ...args: any[]): any} ? A : never;

class Computer {
  constructor(brand: string) {}
}
let brand: ConstructorFirstArg<typeof Computer>
let dateArg: ConstructorFirstArg<typeof Date>

function foo(a: number, user: {title: string, name: string, age: number}) {
  console.log(a);
  return user
}

// const myFoo: ReturnType<typeof foo> = {
//   age: 10,
//   name: 'P',
//   title: 'e1'
// }

type MyReturnType<T> = T extends (...args: any[]) => infer FuncReturnType ? FuncReturnType : never;

const myFoo: MyReturnType<typeof foo> = {
  age: 10,
  name: 'P',
  title: 'e1'
}

type FuncParamType<T> = T extends (...args: infer ArgsTypes) => any ? ArgsTypes : never;

type UserType = FuncParamType<typeof foo>[1]

const user1: UserType = {
  title: 'e',
  name: 'j',
  age: 5
}

const firstParam: FuncParamType<typeof foo>[0] = 1
const firstParam2: FuncParamType<typeof foo>[1] = user1

export {}
