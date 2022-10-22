// С ниже приведенным массивом решить следующие задачи:
// 1. Все функции и данные должны быть протипизированы
// 2. Создать строку из имен пользователей через запятую
// 3. Посчитать общее количнство машин у пользователей
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
import { Users } from './Interfaces'

const users: Users[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true,
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// 2. Создать строку из имен пользователей через запятую
function getNamesOfUsers(users: Users[]): string {
    return users.map(({name}) => name).join(',')
}
const namesString: string = getNamesOfUsers(users)


// 3. Посчитать общее количнство машин у пользователей

function calkGeneralCars(users: Users[]): number {
    const usersWithCars: Users[] = users.filter(({ cars }) => cars)
    return usersWithCars.reduce((acc, item: any) => acc + item.cars.length, 0)
}


// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
function usersWithEducation(users: Users[]): Users[] {
    return users.filter(({hasEducation}) => hasEducation)
}

// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
function usersWithAnimals(users: Users[]): Users[] {
    return users.filter(({animals}) => animals)
}


// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
function getCarsName(users: Users[]) {
   return users.map(({cars}) => cars).join(',')
}
