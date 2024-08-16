export {};

type T0 = Exclude<'a' | 'b' | 'c' , 'a'>;
type T1 = Exclude<'a' | 'b' | 'c' , 'a' | 'b'>;
type T2 = Exclude<string | number | (() => void), Function>;

type Status = 'success' | 'clientError' | 'serverError' | 200 | 401 | 504;
type NumericStatus = Exclude<Status, string>

type T00 = Extract<'a' | 'b' | 'c' , 'a'>;
type T10 = Extract<'a' | 'b' | 'c' , 'a' | 'b'>;
type T20 = Extract<string | number | (() => void), Function>;

interface Person {
  age: number,
  firstName: string,
  lastName: string,
  sex: 'male' | 'female',
  country: string,
  education: string,
  skills: string[]
}
type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>

type T001 = NonNullable<string | number | undefined>
type T002 = NonNullable<string[] | null | undefined>

export function keys<O extends object>(obj: O): Array<keyof O> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

type Computer = {
  brand: string,
  year: number,
  isAvailable: boolean,
}
type C = keyof Computer;
const C1: C = "brand";

type T022 = Extract<keyof Computer, string>
