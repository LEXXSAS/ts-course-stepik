"use strict";
function printName(user) {
    if (user.firstName && user.lastName) {
        console.log(user.firstName.toUpperCase() + ' ' + user.lastName.toUpperCase());
    }
    else {
        if (user.firstName) {
            console.log(user.firstName.toUpperCase());
        }
    }
}
printName({ firstName: 'John' });
printName({ firstName: 'Masha', lastName: 'Petr' });
