"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x1234x = void 0;
function toArray(...arg) {
    return arg;
}
toArray(1, 2, 3);
toArray('a', 'b', 'e');
function head(value) {
    return value[0];
}
exports.x1234x = head('sss');
const y12 = head([1, 2, 3]);
const head2 = (value) => value[0];
const obj1 = {
    title: 'abc',
    value: 12
};
const obj2 = {
    title: '123',
    value: [123]
};
