export type WindowsProp = keyof Window;

const myValue: WindowsProp = 'ontoggle'

interface PC {
  brand: string;
  year: string;
}

type Typ1 = keyof PC; // brand | year

const val1: Typ1 = "brand";

type Tuple1 = keyof [string, number]

const val2: Tuple1 = "0"