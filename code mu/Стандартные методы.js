// № 1 ⊗jsPmSMMP Возведите 2 в 10 степень.

console.log(Math.pow(2, 10));

// №2 Найдите квадратный корень из 245

console.log(Math.sqrt(245));

// №3 Дан следующий массив.Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] * arr[i] * arr[i];
}
console.log(Math.sqrt(sum));

// № ⊗jsPmSMMRd Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

console.log(Math.sqrt(379));
console.log(Math.ceil(Math.sqrt(379)));
console.log(Math.sqrt(379).toPrecision(3));
console.log(Math.sqrt(379).toPrecision(4));

// № 2 Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

let num = 587;
let sqrt = Math.sqrt(num);
let floor = Math.floor(sqrt);
let ceil = Math.ceil(sqrt);
let obj = {
    floor, ceil
}
console.log(obj);

// № ⊗jsPmSMME Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// № ⊗jsPmSMMRa Выведите на экран случайное целое число от 1 до 100.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

// № 2 С помощью цикла заполните массив 10-ю случайными целыми числами.

function getRandomArr(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = getRandomArr(0, 10);
}
console.log(arr);
