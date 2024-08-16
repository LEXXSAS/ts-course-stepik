"use strict";
const user1 = {
    login: 'John',
    email: 'john@mail.ru',
    isOnline: true,
    password: '123',
    lastVisited: new Date(2022, 6, 2)
};
const admin1 = {
    login: 'Mickel',
    email: 'Mickel@mail.ru',
    isOnline: true,
    password: '123',
    lastVisited: new Date(2024, 8, 3),
    role: 'admin'
};
function login(params) {
    if (params.login.length > 0) {
        console.log('Hello ' + params.login);
    }
}
login(admin1);
function login2(user) {
    if (user.login.length > 0, user.password.length > 0) {
        console.log('Hello', user.login);
    }
}
login2(user1);
