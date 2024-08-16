type Level = 'junior' | 'middle' | 'senior';

export interface Developer {
  login: string,
  skills: string[],
  level: Level,
}

function gradeDeveloper(developer: {level: Level}, newLevel: Level): void {
  developer.level = newLevel;
  console.log(developer.level)
}

const dev1: Developer = {
  level: 'junior',
  login: 'Micke',
  skills: ['React', 'javascript']
}

gradeDeveloper(dev1, 'middle')
