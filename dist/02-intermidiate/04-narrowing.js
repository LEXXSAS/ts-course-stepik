"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function example1(x) {
    if (typeof x === 'string') {
        x.toLowerCase();
    }
    else if (typeof x === 'number') {
        x.toFixed();
    }
    else if (x === undefined) {
        console.log('no value');
    }
    else {
        x;
    }
}
function example2(strs) {
    // if (strs && Object.keys(strs).length > 0) {}
    // if (Array.isArray(strs)) {}
    if (strs && typeof strs === 'object') {
        strs.forEach((el) => console.log(el));
    }
    else if (typeof strs === 'string') {
        strs.toLowerCase();
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getTime();
    }
    else {
        let arrNew1 = [1, 2, 3];
        x.concat(x, arrNew1);
    }
}
function move(animal) {
    if ('swim' in animal) {
        return animal.swim();
    }
    return animal.fly();
}
