// Объект с анонимными функциями.
// №1 Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.


let obj = {
    func1: function () {
        return 1
    },
    func2: function () {
        return 2
    },
    func3: function () {
        return 3
    },
};
console.log(obj.func1() + obj.func2() + obj.func3());

// №2 Переберите созданный объект циклом и выведите результаты работы функций в консоль.

let obj1 = {
    func1: function () {
        return 1
    },
    func2: function () {
        return 2
    },
    func3: function () {
        return 3
    },
};

for (let key in obj1) {
    console.log(obj[key]());
}
;

// Применение объекта с функциями.
// №1 Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. Сделайте так, чтобы первая функция возвращала сумму элементов массива, вторая функция - сумму квадратов, а третья - сумму кубов.

let math = {
    sum(arr) {
        return arr.reduce((sum, elem) => sum + elem, 0);
    },
    square(arr) {
        return arr.reduce((sum, elem) => sum + elem
        2, 0
    )
        ;
    },
    cube(arr) {
        return arr.reduce((sum, elem) => sum + elem
        3, 0
    )
        ;
    },
};
console.log(math.sum([1, 2, 3, 4, 5]));
console.log(math.square([1, 2, 3, 4, 5]));
console.log(math.cube([1, 2, 3, 4, 5]));
