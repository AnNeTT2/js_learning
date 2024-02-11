//№1  Реализуйте счетчик вызова функции, работающий на замыканиях.

function test() {
    let num = 1;
    return function () {
        console.log(num);
        num++;
    }
}

let func = test();
test();
test();

// № 2 Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.

function test1() {
    let num = 10;
    return function () {
        console.log(num);
        num--;
    }
}

let func1 = test1();
console.log(func1());
console.log(func1());
console.log(func1());