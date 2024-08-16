export {}

type WllKnownBrands = 'apple' | 'lenovo' | 'hp' | 'dell' | 'microsoft' | 'huawei';

type Names = Record<string, any>;
type BrandNames = Record<WllKnownBrands, number>;

const myBrands: BrandNames = {
  apple: 1,
  hp: 2,
  dell: 3,
  huawei: 4,
  lenovo: 5,
  microsoft: 6
}

interface Todo {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  createdAt: number
}

type SimpleTodo = Pick<Todo, 'id' | 'title' | 'completed'>

const todo1: SimpleTodo = {
  id: '1',
  title: 'l1',
  completed: true
}

type SimpleTodo2 = Omit<Todo, 'description' | 'createdAt'>

type NewTodo = Pick<Todo, 'title' | 'description'>

type Regions = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';
type CountriesByRegion = Record<Regions, string[]>

const visitedCountries: CountriesByRegion = {
  Africa: ['Egypt', 'Angola', 'Tunis'], 
  America: ['Mexico'],
  Asia: ['India'],
  Europe: ['Spain', 'England', 'Hungary'],
  Oceania: []
}

type Country = {
  name: string,
  region: string,
  population: number,
  flag: string,
  capital: string,
  currencies: string[],
  languages: string[],
}

type CountryCardProps = Pick<Country, 'capital' | 'region' | 'name'>