"use strict";
let word = null;
const num = 10;
if (num > 5) {
    word = 'abc';
}
console.log(word.toLowerCase());
function printName111(name) {
    const fullName = name;
}
function printName2(person) {
    console.log(person.name);
}
const people = [
    {
        name: 'Green',
        age: 26,
        sex: "male"
    },
    {
        name: 'Alice',
        age: 21,
        sex: "female"
    }
];
const femalePeople = people.find(person => person.sex === 'female');
