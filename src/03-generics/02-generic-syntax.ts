type TypeFactory<T> = T;
type XType = TypeFactory<string>

function toArray<T>(...arg: T[]): T[] {
  return arg
}

toArray<number>(1, 2, 3)
toArray<string>('a', 'b', 'e')


// function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[] | T): T;
function head(value: any): any {
  return value[0];
}

export const x1234x = head<string>('sss');
const y12 = head([1, 2, 3])

const head2 = <T>(value: T[]): T => value[0]

interface ModelData<T> {
  title: string,
  value: T,
}

const obj1: ModelData<number> = {
  title: 'abc',
  value: 12
}

const obj2: ModelData<Array<number>> = {
  title: '123',
  value: [123]
}