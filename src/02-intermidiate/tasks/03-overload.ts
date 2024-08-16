
function head(value: string): string
function head(value: number[]): number
function head(value: boolean[]): boolean
function head(value: any): any {
  return value[0];
}

export const x1 = head('1')
const x2 = head([1, 5, 6])
const x3 = head([true, false])
