// № 1 Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную res.

function func2(num4) {
    return num4 ** 3;
};
let res3 = func2(8);
console.log(res3);

// №2 Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.

function func(num) {
    return Math.sqrt(num);
};
console.log(func(3) + func(4));

//  № 1 Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

function sqrt(num) {
    return Math.sqrt(num);
}

function round(num) {
    return num.toFixed(3);
}

let res = round(func(2));
console.log(res);

// № 2 Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.

function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

let res1 = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(res1);

// № 3 Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

function round(num) {
    return num.toFixed(3);
}

С
помощью
этой
функции
модифицируйте
предыдущую
задачу
так, чтобы
в
переменную
res
записывалась
дробь, округленная
до
3 - х
знаков
в
дробной
части.function
round(num)
{
    return num.toFixed(3);
}

// №1 Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.

function func1(num) {
    let res = num / 2;
    for (let i = 0; i < num; i++) {
        if (res < 10) {
            return i;
        }
    }
}

console.log(func1(12));

// №1 Дана следующая функция:

function func(num1, num2) {
    let res;

    if (num1 > 0 && num2 > 0) {
        res = num1 * num2;
    } else {
        res = num1 - num2;
    }

    return res;
}

console.log(func(3, 4));

// Перепишите ее в сокращенной форме согласно изученной теории.

function func2(num1, num2) {
}

let res5;
if (num1 > 0 && num2 > 0) {
    return (num1 * num2);
} else {
    return (num1 - num2);
}
;
console.log(func2(3, 4));

// №2 Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.

function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3() {
    return 3;
}

test(func1, func2, func3);

function test(func1, func2, func3) {
    console.log(func1() + func2() + func3());
}