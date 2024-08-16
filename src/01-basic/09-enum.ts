enum ShapeKind {
  Circle = 'Circle',
  Square = 'Square',
}

const myShape = ShapeKind.Circle;

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

const circle1: Circle = {
  kind: ShapeKind.Circle,
  radius: 13
}

// console.log(circle1['kind'])

enum StatusCode {
  ERROR = 500,
  NOT_FOUND = 404,
  NOT_AUTH = 403
}

enum StatusCodeNaming {
  ERROR,
  NOT_FOUND,
  NOT_AUTH
}
let en = StatusCodeNaming[2]
let en0 = StatusCode['ERROR']
console.log(en0)

enum links {
  youtube = 'https://youtube.com',
  google = 'https://google.com'
}

console.log(links.youtube)