"use strict";
var ShapeKind;
(function (ShapeKind) {
    ShapeKind["Circle"] = "Circle";
    ShapeKind["Square"] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
const circle1 = {
    kind: ShapeKind.Circle,
    radius: 13
};
// console.log(circle1['kind'])
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode[StatusCode["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode || (StatusCode = {}));
var StatusCodeNaming;
(function (StatusCodeNaming) {
    StatusCodeNaming[StatusCodeNaming["ERROR"] = 0] = "ERROR";
    StatusCodeNaming[StatusCodeNaming["NOT_FOUND"] = 1] = "NOT_FOUND";
    StatusCodeNaming[StatusCodeNaming["NOT_AUTH"] = 2] = "NOT_AUTH";
})(StatusCodeNaming || (StatusCodeNaming = {}));
let en = StatusCodeNaming[2];
let en0 = StatusCode['ERROR'];
console.log(en0);
var links;
(function (links) {
    links["youtube"] = "https://youtube.com";
    links["google"] = "https://google.com";
})(links || (links = {}));
console.log(links.youtube);
