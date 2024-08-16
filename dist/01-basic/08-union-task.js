"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gradeDeveloper(developer, newLevel) {
    developer.level = newLevel;
    console.log(developer.level);
}
const dev1 = {
    level: 'junior',
    login: 'Micke',
    skills: ['React', 'javascript']
};
gradeDeveloper(dev1, 'middle');
