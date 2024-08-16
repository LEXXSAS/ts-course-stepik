let word: string | null = null;
const num = 10;
if (num > 5) {
  word = 'abc'
}

console.log(word!.toLowerCase())

function printName111(name?: string) {
  const fullName: string = name!;
}

interface Person1 {
  name: string
  age: number,
  sex: 'female' | 'male'
}

function printName2(person?: Person1) {
  console.log(person!.name)
}

const people: Person1[] = [
  {
    name: 'Green',
    age: 26,
    sex: "male"
  },
  {
    name: 'Alice',
    age: 21,
    sex: "female"
  }
]

const femalePeople = people.find(person => person.sex === 'female')!
