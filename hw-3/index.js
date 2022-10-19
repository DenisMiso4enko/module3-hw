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
var users = [
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
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
// 2. Создать строку из имен пользователей через запятую
function getNamesOfUsers(users) {
    return users.map(function (_a) {
        var name = _a.name;
        return name;
    }).join(',');
}
var namesString = getNamesOfUsers(users);
// 3. Посчитать общее количнство машин у пользователей
function calkGeneralCars(users) {
    var usersWithCars = users.filter(function (_a) {
        var cars = _a.cars;
        return cars;
    });
    return usersWithCars.reduce(function (acc, item) { return acc + item.cars.length; }, 0);
}
var cars = calkGeneralCars(users);
console.log(cars);
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
function usersWithEducation(users) {
    return users.filter(function (_a) {
        var hasEducation = _a.hasEducation;
        return hasEducation;
    });
}
// 5. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
function usersWithAnimals(users) {
    return users.filter(function (_a) {
        var animals = _a.animals;
        return animals;
    });
}
// 6. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую
function getCarsName(users) {
    return users.map(function (_a) {
        var cars = _a.cars;
        return cars;
    }).join(',');
}
