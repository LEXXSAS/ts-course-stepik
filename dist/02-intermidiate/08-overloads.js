"use strict";
function add(a, b) {
    return a + b;
}
const res1 = add(1, 2);
const res2 = add('1', '2');
function asyncSum(a, b, cb) {
    const result = a + b;
    if (cb) {
        return cb(result);
    }
    return Promise.resolve(result);
}
