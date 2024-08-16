"use strict";
// const pairs: [string, string][] = [['key', 'value'], ['key2', 'value2']]
// обычный кортеж со вторым параметром неопределнного количетсва элементов
const data2 = ['its string2', 5, 6, 7, 8];
data2[0] = 'John';
// кортеж readonly только для чтения - изменение значений запрещено
const data3 = ['its string3', 5, 6, 7, 8];
// data3[0] = 'Petr'
console.log(data2);
let tom = ['Tom', 36, true];
let [username, userage, isMarried] = tom; // декомпозиция
console.log(username);
console.log(userage);
let tom2 = ['Tom2', 7, false];
const [username2, ...rest] = tom2; // использование rest оператора
console.log(username2);
console.log(rest[0]);
// csv
const doc = [];
doc.push(['Mikhail', 'Frontend developer', 12, new Date(1985, 4, 10)]);
console.log(`doc: ${doc}`);
