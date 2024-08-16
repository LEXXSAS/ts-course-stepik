"use strict";
const x = "ok";
const arr = [];
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
function welcome(person) {
    if (Array.isArray(person)) {
        console.log('Hello', person.join(' '));
        return 1;
    }
    else {
        console.log('Hello just string', person);
        return person;
    }
}
