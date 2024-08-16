interface User {
  login: string;
  email: string;
  password: string;
  isOnline: boolean;
  lastVisited: Date;
}

interface Admin extends User {
  role: string
}

const user1: User = {
  login: 'John',
  email: 'john@mail.ru',
  isOnline: true,
  password: '123',
  lastVisited: new Date(2022, 6, 2)
}

const admin1: Admin = {
  login: 'Mickel',
  email: 'Mickel@mail.ru',
  isOnline: true,
  password: '123',
  lastVisited: new Date(2024, 8, 3),
  role: 'admin'
}

export function login(params: {login: User['login']}): void {
  if (params.login.length > 0) {
    console.log('Hello ' + params.login)
  }
}

login(admin1)

function login2(user: {login: string, password: string}): void {
  if (user.login.length > 0, user.password.length > 0) {
    console.log('Hello', user.login)
  } 
}

login2(user1)