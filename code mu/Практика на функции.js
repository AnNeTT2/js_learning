// № 1 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

function sumArr(arr) {
    let res = 0;
    for (let elem of arr) {
        res += elem;
    }
    return res;
}

console.log(sumArr([8, 3, 18, -1, 9]));

//  № 2 Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

function getDivisors(num) {
    let res = [];
    for (let i = 0; i < num; i++) {
        if (num % i == 0) {
            res.push(i);
        }
    }
    return res;
}

console.log(getDivisors(89358));

// № 3 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

function strToCharArray(str) {
    return str.split("");
}

console.log(strToCharArray('hola'))

 № 4
Сделайте
функцию, которая
параметром
будет
принимать
строку
и
переворачивать
ее
символы
в
обратном
порядке.function
reversedStr(str)
{
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reversedStr('Hello'));

// № 5 Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(capitalize('hola'))


// № 7 Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

function getRandomArr(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = getRandomArr(1, 50);
}
console.log(arr);

// № 8 Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.

function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++)
        sum += Number(str[i]);
    return sum;
}

console.log(getDigitsSum(18));


// № 9 Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.

function isLeapYear(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        console.log('Високосный');
    } else {
        console.log('Не этот год');
    }
    ;
    console.log(isLeapYear(2024));

// 10 Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.

    function calcTime(sec) {
        return sec / 86400;
    };
    console.log(calcTime(360));

// № 11 Сделайте функцию, которая будет возвращать случайный элемент из массива.

    function getRandomItemFromArray(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    const arr = [1, 2, 3, 4, 5];
    console.log(getRandomItemFromArray(arr));

// № 12 Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет

    function isSimpleNum(num) {
        for (let i = 2, max = Math.sqrt(num); i < max; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    }

    console.log(isSimpleNum(59));

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

    function isEvenElem(arr) {
        for (let elem of arr) {
            if (elem % 2 == 1) {
                return false;
            }
        }
        return true;
    }

    console.log(isEvenElem([1, 2, 3, 4, 5]));