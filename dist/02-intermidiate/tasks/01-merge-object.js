"use strict";
/*
Создайте в двух вариантах (алиасах и интерфейсах) следующую структуру:
    Product : price, isNew, isSale, title
    Vehicle : wheels, year, brand
    Car: type, model +Product, +Vehicle
*/
// вариант объединения типов два
// type Car1 = & Product & Vehicle &{
//   type: string,
//   model: string
// } 
// const iCar1: ICar = {}
// const car2: Car1 = {}
