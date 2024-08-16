/* 
Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:
    Product : price, isNew, isSale, title
    Vehicle : wheels, year, brand
    Car: type, model +Product, +Vehicle
*/

interface IProduct {
  price: number,
  isNew: boolean,
  isSale?: boolean,
  title: string
}

interface IVehicle {
  wheels: number,
  year: string,
  brand: string
}

interface ICar extends IProduct, IVehicle {
  type: string,
  model: string
}

type Product = {
  price: number,
  isNew: boolean,
  isSale: boolean,
  title: string
}

type Vehicle = {
  wheels: number,
  year: string,
  brand: string
}

type Car1 = {
  type: string,
  model: string
} & Product & Vehicle

// вариант объединения типов два
// type Car1 = & Product & Vehicle &{
//   type: string,
//   model: string
// } 

// const iCar1: ICar = {}
// const car2: Car1 = {}
