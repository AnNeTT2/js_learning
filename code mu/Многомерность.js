// № 1 ⊗jsPmMuAr Дан следующий массив.Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
let arr = [
    ['a', 'b', 'c'],
    ['d', 'e', 'f'],
    ['g', 'h', 'i'],
    ['j', 'k', 'l'],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

// № 2  ⊗jsPmMuAr Дан следующий массив.Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr = [[1, 2], [3, 4], [5, 6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);

// № 1 ⊗jsPmMuATD Дан следующий массив.Обращаясь к каждому элементу массива найдите сумму всех его элементов
let arr = [[[1, 2], [3, 4],], [[5, 6], [7, 8],],];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        for (let k = 0; k < arr[i][j].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);

// № 1 ⊗jsPmMuAI Дан двухмерный массив с числами.С помощью вложенных циклов найдите сумму элементов этого массива.
let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
}
console.log(sum);
// № 2 Дан трехмерный массив с числами.С помощью вложенных циклов найдите сумму элементов этого массива.
let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
        for (let k = 0; k < arr1[i][j].length; k++) {
            sum1 += arr1[i][j][k];
        }
    }
}
console.log(sum1);

// Сформируйте с помощью двух вложенных циклов следующий массив:
//
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr = [];
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 5; j++) {
        arr[i].push(j + 1);
    }
}
console.log(arr);

// № 2 Сформируйте с помощью двух вложенных циклов следующий массив:
//
// [
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x']
// ]

let arr1 = [];
for (let i = 0; i < 3; i++) {
    arr1[i] = [];
    for (let j = 0; j < 4; j++) {
        arr1[i].push('x');
    }
}
console.log(arr1);

// Сформируйте с помощью трех вложенных циклов следующий массив:
//
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]

let arr3 = [];
for (let i = 0; i < 3; i++) {
    arr3[i] = [];
    for (let j = 0; i < 2; i++) {
        arr3[i] = [];
        for (let k = 0; k < 5; k++) {
            arr3[i].push(k + 1);
        }
    }
}
console.log(arr3);

// № 1 ⊗jsPmMuAFP Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 5; j++) {
        arr[i].push(j);
    }
}

console.log(arr);
// № 2 Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = '';
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


let arr1 = [];

for (let i = 0; i < 3; i++) {
    arr1[i] = [];

    for (let j = 1; j <= 5; j++) {
        arr1[i].push(j);
    }
}

console.log(arr1);

// № 3 Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr2 = [];

for (let i = 0; i < 3; i++) {
    arr2[i] = [];

    for (let j = 1; j <= 5; j++) {
        arr2[i].push(j);
    }
}

console.log(arr2);
// № 4 Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[j] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.


let arr3 = [];

for (let i = 0; i < 3; i++) {
    arr3[i] = [];

    for (let j = 1; j <= 5; j++) {
        arr3[i].push(j);
    }
}

console.log(arr3);
// № 5 Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr4 = [];

for (let i = 0; i < 3; i++) {
    arr4[i] = [];

    for (let j = 1; j <= 5; j++) {
        arr4[i].push(j);
    }
}

console.log(arr4);
// № 6 Автор следующего кода хотел сделать двухмерный массив:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 1; j <= 5; j++) {
// 		arr.push(j);
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr5 = [];

for (let i = 0; i < 3; i++) {
    arr5[i] = [];

    for (let j = 1; j <= 5; j++) {
        arr5[i].push(j);
    }
}

console.log(arr5);

// № 1 ⊗jsPmMuAFO Сформируйте с помощью двух вложенных циклов следующий массив:
//
// [[1, 2], [3, 4], [5, 6], [7, 8]]

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 1; j <= 2; j++) {
        arr[i].push(k);
        k++;
    }
}
console.log(arr);
// № 2 Сформируйте с помощью двух вложенных циклов следующий массив:
//
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]

let arr1 = [];
let k = 2;
for (let i = 0; i < 4; i++) {
    arr1[i] = [];
    for (let j = 0; j < 3; j++) {
        arr1[i].push(k);
        k += 2;
    }
}
console.log(arr1);
// № 3 Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
//
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

let arr = [];
for (let i = 0, k = 1; i < 4; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);

// № 4 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 5 Автор следующего кода хотел сделать вот такой массив:
//
//  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 6 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k--;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 7 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
// let k;
//
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 8 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 9 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0, k++; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 10 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++; k++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 11 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = ++k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k++;
    }
}
console.log(arr);
// № 12 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
// let k = 1;
//
// for (let i = 0; i < 3; i++) {
// 	arr[k] = [];
//
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);
// № 13 Автор следующего кода хотел сделать вот такой массив:
//
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Для этого был написан следующий код:
//
// let arr = [];
//
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
//
// 	for (let j = 0; j < 3; k++) {
// 		arr[i][j] = k;
// 	}
// }
//
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = k;
        k++;
    }
}
console.log(arr);

// № 1 ⊗jsPmMuOb Дан следующий объект:
//
// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// Найдите сумму элементов приведенного объекта.

let obj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let sumValue = 0;
for (let key in obj) {
    let subObj = obj[key];
    for (let subKey in subObj) {
        sumValue += subObj[key];

    }
}
console.log(sumValue);


// № 2 Дан следующий объект:
//
// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// Выведите на экран элемент 'b2' и элемент 'c1'.

let obj1 = {
    1: {
        1: 'a1',
        2: 'a2',
        3: 'a3',
    },
    2: {
        1: 'b1',
        2: 'b2',
        3: 'b3',
    },
    3: {
        1: 'c1',
        2: 'c2',
        3: 'c3',
    },
}
console.log(obj1['2']['2']);
console.log(obj1['3']['1']);

// № 1 ⊗jsPmMuAOO Дан следующий массив работников:
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// Выведите на экран данные каждого работника в формате имя - зарплата.

let employees = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
for (let employee of employees) {
    console.log(employee.name + ' ' + employee.salary);

}
// № 2 Дан следующий массив работников:
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 	},
// ];
// Выведите на экран сумму зарплат всех работников.

let employees1 = [
    {
        name: 'name1',
        salary: 300,
    },
    {
        name: 'name2',
        salary: 400,
    },
    {
        name: 'name3',
        salary: 500,
    },
];
let sum = 0;
for (let employee of employees1) {
    sum += +employee.salary;
}

console.log(sum);

// № 3 Дан следующий массив работников:
//
// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

let employees2 = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
    {
        name: 'name4',
        salary: 600,
        age: 31,
    },
    {
        name: 'name5',
        salary: 700,
        age: 32,
    },
];
let sum1 = 0;
for (let employee of employees2) {
    if (employee.age >= 30) {
        sum1 += +employee.salary;
    }
}
console.log(sum1);

// № 1 ⊗jsPmMuVK Дан следующий объект с названиями месяцев:
//
// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };
// Даны также следующие переменные:
//
// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5;   // число от 0 до 11
// Выведите на экран название месяца, соответствующее значениям переменных lang и month.

let months = {
    'ru': [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь',
    ],
    'en': [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december',
    ],
};
let lang = 'en'; // может быть или 'ru' или 'en'
let month = 8;   // число от 0 до 11
console.log(months[lang][month]);

// № 2  Дана вот такая структура для хранения списка дел за года, месяцы и дни:
//
// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// }
// Пусть даны также три переменные, содержащие год, месяц и день. Выведите дело, соответствующее значениям переменных.

let affairs = {
    '2018': {
        11: {
            29: ['дело111', 'дело112', 'дело113'],
            30: ['дело121', 'дело122', 'дело123'],
        },
        12: {
            30: ['дело211', 'дело212', 'дело213'],
            31: ['дело221', 'дело222', 'дело223'],
        },
    },
    '2019': {
        12: {
            29: ['дело311', 'дело312', 'дело313'],
            30: ['дело321', 'дело322', 'дело323'],
            31: ['дело331', 'дело332', 'дело333'],
        }
    },
}
let year = 2019;
let month1 = 12;
let day = 30;
console.log(affairs[year][month1][day]);

// № 3 Автор следующего кода хотел вывести элемент со значением '24':
//
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj['key1'][key2]);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// № 4 Автор следующего кода хотел вывести элемент со значением '24':
//
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj.key1.key2);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.


let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// № 5 Автор следующего кода хотел вывести элемент со значением '24':
//
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj.key1['key2']);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.

let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);

// № 6 Автор следующего кода хотел вывести элемент со значением '24':
//
// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
//
// let key1 = 'key2';
// console.log(obj['key1']['key4']);
// Код, однако, выводит не то, что ожидал автор. Исправьте ошибку.


let obj = {
    key1: {
        key2: '12',
        key3: '13',
    },
    key2: {
        key4: '24',
        key5: '25',
    },
}

let key1 = 'key2';
let key2 = 'key4';
console.log(obj[key1][key2]);


// № 1 ⊗jsPmMuAEA Добавьте в следующий массив еще одного работника
// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
// ];

let employees = [
    {
        name: 'name1',
        salary: 300,
        age: 28,
    },
    {
        name: 'name2',
        salary: 400,
        age: 29,
    },
    {
        name: 'name3',
        salary: 500,
        age: 30,
    },
];
employees.push({
    name: 'name4',
    salary: 200,
    age: 19,
});
console.log(employees);

