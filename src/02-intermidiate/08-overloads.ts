function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a: any, b: any): any {
  return a + b
}

const res1 = add(1, 2)
const res2 = add('1', '2')

type asyncCb = (res: number) => number;
function asyncSum(a: number, b: number): Promise<number>
function asyncSum(a: number, b: number, cb: asyncCb): number;
function asyncSum(a: number, b: number, cb?: asyncCb): any {
  const result = a + b;
  if (cb) {
    return cb(result)
  }

  return Promise.resolve(result)
}
