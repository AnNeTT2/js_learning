// №1 ⊗jsPmLpPrm Выведите с помощью цикла столбец чисел от 1 до 100.
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// №2 ⊗jsPmLpPrm Выведите с помощью цикла столбец чисел от 100 до 1
for (let i = 100; i >= 1; i--) {
    console.log(i);
}

// №3 ⊗jsPmLpPrm Выведите с помощью цикла столбец четных чисел от 1 до 100.
for (let i = 0; i <= 100; i += 2) {
    console.log(i);
}
// №4 ⊗jsPmLpPrm Заполните массив 10-ю иксами с помощью цикла.
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push('x');
}

console.log(arr);
// №5 ⊗jsPmLpPrm Заполните массив числами от 1 до 10 с помощью цикла.
let arr = [];
for (let i = 1; i <= 10; i++) {
    arr.push(i);
}
console.log(arr);

// № 6 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
let arr = [9, 1, 29, -39, 49, 59];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// № 7 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
let arr1 = [8, 15, 9, 5, 105];
for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] == 5) {
        console.log('Привет, пятерка!');
    }
}

// № 8 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива
let arr1 = [1, 2, 3, 5, 4];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
}
console.log(sum);

// № 9 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
let arr1 = [10, 20, 30, -50, 4.5];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] * arr1[i];
}
console.log(sum);

// № 10 Дан массив с числами. Найдите среднее арифметическое его элементов.
let arr2 = [11, 55, 100, -30];
let sum1 = 0;
for (let i = 0; i < arr2.length; i++) {
    sum1 += arr2[i] / 2;
}
console.log(sum1);

// № 11 Напишите скрипт, который будет находить факториал числа. Факториал - это произведение всех целых чисел от единицы до заданного числа.
let num = 10;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial);

// № 12 Заполните массив числами от 10 до 1 с помощью цикла.
let arr = [];
for (let i = 10; i >= 1; i--) {
    arr.push(i);
}
console.log(arr);

// № 13 Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.
let arr1 = [0, -8, 10, 11, -3];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > 0) {
        sum += arr1[i];
    }
}
console.log(sum);

// № 14 Дан массив числами.Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5
let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    let arr1 = String(arr);
    if (arr1[i][0] == '1' || arr1[i][0] == '2' || arr1[i][0] == '5') {
        console.log(arr[i]);
    }
}

// № 15 Дан массив с числами. Выведите элементы этого массива в обратном порядке
let arr = [1, 5, 7, 9, 15];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// № 16 Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.
let arr = [9, 1, 29, -39, 49, 59];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i) {
        console.log(arr[i]);
    }
}

// № 17 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.
let arr = [0, 100, 1000, 10001];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}

// № 18 Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце.
let arr = [9, 19, 29, -39, 49, 59];
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}

// № 19 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
for (let i = 0; i < week.length; i++) {
    if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
        document.write(week[i] + 'b' + ' ');
    } else {
        document.write(week[i] + ' ');
    }
}

// № 20 Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 'Воскресенье';
for (let i = 0; i < week.length; i++) {
    if (i == day) {
        document.write('<i>' + week[i] + ' </i>');
    } else {
        document.write(week[i] + '<br>');
    }
}

// № 21 Дан следующий объект с работниками и их зарплатами.Увеличьте зарплату каждого работника на 10%.
let obj = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
let sum = 0;
for (let key in obj) {
    sum = obj[key] + obj[key] * 0.1;
    console.log(sum)
}

// № 22 Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.
let obj1 = {
    employee1: 100,
    employee2: 200,
    employee3: 300,
    employee4: 400,
    employee5: 500,
    employee6: 600,
    employee7: 700,
};
let sum1 = 0;
for (let key1 in obj) {
    if (obj1[key1] <= 400) {
        sum1 = obj1[key1] + obj1[key1] * 0.1;
        console.log(sum1);
    }
}

// № 23  С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};
for (let i = 0; i <= 4; i++) {
    let key = arr1[i];
    let value = arr2[i];
    obj[key] = value;
}
console.log(obj);

// № 24 Найдите сумму ключей этого объекта и поделите ее на сумму значений.
let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKey = 0;
let sumValue = 0;
for (let key in obj) {
    sumKey += +(key);
    sumValue += +(obj[key]);
}
console.log(sumKey / sumValue);

// № 25 Запишите ключи этого объекта в один массив, а значения - в другой.
let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr = [];
let arr1 = [];
for (let key in obj) {
    arr.push(key);
    arr1.push(obj[key]);
}
console.log(arr);
console.log(arr1);

// № 26 Дан следующий объект.Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. То есть у вас в результате получится вот такой массив:[
//     125,
//     225,
//     128,
//     145,
//     281,
// ];
let obj = {
    1: 125,
    2: 225,
    3: 128,
    4: 356,
    5: 145,
    6: 281,
    7: 452,
};
let arr = [];
for (let key in obj) {
    let value = String(obj[key]);
    if (value[0] == 1 || value[0] == 2) {
        arr.push(+(value));
    }
}
console.log(arr);

// № 27 Дан следующий массив.Создайте из этого массива следующий объект:
//
// {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
    let key = arr1[i];
    let value = arr[i];
    obj[key] = value;
}
console.log(obj);

// № 28 Дан следующий массив:let arr = ['a', 'b', 'c', 'd', 'e'];Создайте из этого массива следующий объект:{'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr1 = [1, 2, 3, 4, 5];
let obj = {};
for (let i = 0; i <= 4; i++) {
    let key = arr[i];
    let value = arr1[i];
    obj[key] = value;
}
console.log(obj);