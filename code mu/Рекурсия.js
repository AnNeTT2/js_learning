// Дан массив:let arr = [1, 2, 3, 4, 5];С помощью рекурсии выведите элементы этого массива в консоль.

let arr = [1, 2, 3, 4, 5];

function func($arr) {
    console.log(arr.shift(), arr);
    if (arr.length != 0) {
        func(arr);
    }
}

func([1, 2, 3, 4, 5]);

// Дан массив:let arr = [1, 2, 3, 4, 5]; С помощью рекурсии найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];

function getSum(arr) {
    let sum = arr.shift();

    if (arr.length !== 0) {
        sum += getSum(arr);
    }
    return sum;
}

console.log(getSum([1, 2, 3, 4, 5]));

/*Дан многомерный объект произвольного уровня вложенности, например, такой:
{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии найдите сумму элементов этого объекта.
*/

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function func(obj) {
    let sum = 0;
    for (let elem in obj) {
        if (typeof obj[elem] == 'object') {
            sum += func(obj[elem]);
        } else {
            sum += obj[elem]; // прибавляем значение, а не ключ
        }
    }
    return sum;
}

console.log(func(obj));

/*Дан многомерный массив произвольного уровня вложенности, например, такой:[1, [2, 7, 8], [3, 4, [5, [6, 7]]]]
Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:[1, 2, 7, 8, 3, 4, 5, 6, 7]
*/

let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let arr2 = [];

function func(arr) {
    let res = [];
    for (let elem of arr) {
        if (typeof elem == 'object') {
            res.push(func(elem));
        } else {
            arr2.push(elem);
        }
    }
    return arr2;
}

console.log(func(arr));

/*Дан многомерный объект произвольного уровня вложенности, например, такой:
{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
 */

let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function func(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            func(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

console.log(func(obj));

/* Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]] С помощью рекурсии слейте элементы этого массива в одну строку:
'abcdefgjk'
 */

let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function arrayToString(arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            str += arrayToString(arr[i]);
        } else {
            str += arr[i];
        }
    }
    return str;
}

console.log(arrayToString(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]));

/* Дан многомерный массив произвольного уровня вложенности, например, такой:[1, [2, 7, 8], [3, 4], [5, [6, 7]]]
Возведите все элементы-числа этого массива в квадрат.
*/

let arr1 = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'object') {
            arr[i] = func(arr[i]);
        } else {
            arr[i] = arr[i] * arr[i];
        }
    }
    return arr;
}

console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));