// Запись функции в другую переменную . № 1 Сделайте функцию func1, которая будет возвращать через return число 3.

function func1() {
    return 3;
};
console.log(func1());

// № 2 Скопируйте исходный код функции func1, в переменную func2.

function func1() {
    return 3
};
let func2 = func1();

console.log(func1());
console.log(func2);

// № 3 Выведите в консоль сумму результатов работы функций func1 и func2.

console.log(func1() + func2);

// Присваивание функций в переменные. № 1 Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.

let func3 = function () {
    return 1;
};
console.log(func3());

// № 2 Сделайте безымянную функцию, которая будет возвращать через return число 2. Запишите эту функцию в переменную func2.

let func4 = function () {
    return 2;
};
console.log(func4());

// № 3 Найдите сумму значений функций func1 и func2. Выведите эту сумму алертом в консоль.

alert(func3() + func4());

// Function expression и Function declaration. № 1 Создайте функцию как Function Declaration. Проверьте то, что она будет доступна выше места своего объявления.

func5();

function func5() {
    return 5;
};

// № 2 Создайте функцию как Function Expression. Проверьте то, что она не будет доступна выше места своего объявления.

console.log(func6());

let func6 = function () {
    return 6;
};

// Массив с анонимными функциями.№ 1 Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3.

let arr = [
    function () {
        return 1
    },
    function () {
        return 2
    },
    function () {
        return 3
    },
];
console.log(arr[1]());

// №2 Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.

console.log(arr[2]());


// №3 Используя созданный вами массив arr найдите сумму результатов функций (без цикла).

let arr = [
    function () {
        return 1
    },
    function () {
        return 2
    },
    function () {
        return 3
    },
];
let res = arr[0]() + arr[1]() + arr[2]();
console.log(res);


// №4 Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.

let arr = [
    function () {
        return 1
    },
    function () {
        return 2
    },
    function () {
        return 3
    },
];

for (let func of arr) {
    func();
}
