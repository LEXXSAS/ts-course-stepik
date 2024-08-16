export {}

type Side = 'top' | 'right' |'bottom' | 'left';
type MarginCapitalize = `margin${'' | Capitalize<Side>}`;
type Margin = `margin-${Side}`;
type Padding = `padding-${Side}`;

type Direction = 'down' | 'left' | 'right' | 'up';
type Position = 'top' | 'bottom';
type Entry = 'in' | 'out';
type FadeClassNames = `fade${Capitalize<Entry>}`;
type FadeClassNames2 = `fade${Capitalize<Entry>}${Capitalize<'' | Direction | Position>}`;

interface Car {
  brand: string,
  model: string,
  year: number,
}

type CarFactory = {
  [K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void
}

type Style = 'none' | 'dotted' | 'dashed' | 'solid';
type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';

type BorderStyle = `${Style} ${Lowercase<Color>}`

let borderStyle: BorderStyle = 'solid red';
let borderStyle2: BorderStyle = 'dashed white';
