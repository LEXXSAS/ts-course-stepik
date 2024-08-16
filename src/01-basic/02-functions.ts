export function average(...nums: number[]) {
  const sum = nums.reduce((current, total) => current + total, 0)
  
  return sum / nums.length
}

console.log(average(5, 3))


// задание урока

function slice(str: string, start: number, end?: number): string {
  let newStr: string = '';
  let lastIndex: number;
 
  if (end) {
    lastIndex = end > str.length ? str.length : end;
  } else {
    lastIndex = str.length;
  }
 
  for (let i = start; i < lastIndex; i++) {
    newStr += str[i];
  }
 
  return newStr;
}

type User001 = {
  name: string,
  age: number
}

function getOlderUser(user1: User001, user2: User001): User001 | null {
  if (user1.age > user2.age) {
    return user1
  }
  if (user2.age > user1.age) {
    return user2
  }

  return null;
}
