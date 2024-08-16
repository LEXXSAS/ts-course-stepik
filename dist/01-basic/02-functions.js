"use strict";
function average(...nums) {
    const sum = nums.reduce((current, total) => current + total, 0);
    return sum / nums.length;
}
console.log(average(5, 3));
// задание урока
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
function getOlderUser(user1, user2) {
    if (user1.age > user2.age) {
        return user1;
    }
    if (user2.age > user1.age) {
        return user2;
    }
    return null;
}
