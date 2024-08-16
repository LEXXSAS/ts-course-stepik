function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
  return value[0];
}

export const x123 = head('sss');
const y12 = head([1, 2, 3])

interface ModelData {
  title: string,
  value: string,
}