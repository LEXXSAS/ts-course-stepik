"use strict";
function isAnInternetOrder(order) {
    return order.email !== undefined;
    // return !!order && 'email' in order;
}
function isATelephoneOrder(order) {
    return order.callerNumber !== undefined;
    // return !!order && 'callerNumber' in order;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
