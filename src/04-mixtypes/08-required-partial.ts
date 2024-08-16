export {}

interface Todo {
  id: string,
  title: string,
  description: string,
  completed: boolean,
  createdAt: number
}

type ReadOnlyTodo = Readonly<Todo>
type PartialTodo = Partial<Todo>
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
  return {...todo, ...fieldsToUpdate}
}

type RequiredTodo = Required<Todo>

type LanguageLevel = 'begginer' | 'junior' | 'middle' | 'senior' | 'native';

type Developer = {
  html: LanguageLevel,
  css: LanguageLevel,
  javascript?: LanguageLevel,
  typescript?: LanguageLevel,
}

type FrontendDeveloper = Required<Developer>

type LanguageLevel2 = 'begginer' | 'junior' | 'middle' | 'senior' | 'native';

type Skill = { language: string, level: LanguageLevel }

type Developer2 = {
  id: string,
  login: string,
  level: 'junior' | 'middle' | 'senior',
  skills: Skill[]
}
type FrontendDeveloper2 = Partial<Developer>
function updateDeveloper(dev: Developer2, updatedFields: FrontendDeveloper2) {
  return { ...dev, ...updatedFields }
}