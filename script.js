
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  


// const fruits = ['apple', 'banana', 'mango', 'guava'];

// function checkAvailability(arr, val) {
//   return arr.some(function(arrVal) {
//     return val === arrVal;
//   });
// }

// alert (checkAvailability(fruits, 'kela'))   // false
// alert (checkAvailability(fruits, 'banana')) // true

// function sortByAge(users) {
// users.sort(function (a, b) {
// return a.age - b.age
// })
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(item => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id
// }));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

// alert( usersMapped[0].id ); // 1
// alert( usersMapped[0].fullName ); // Вася Пупкин



// function Calculator () {
    
//     this.methods = {
//         '-':(a,b)=> a-b,
//         '+':(a,b)=> a+b,
//         '*':(a,b)=> a*b,
//         '/':(a,b)=> a/b
//     }
    
//     this.calculate = function (str) {
//         let split = str.split(' ')
//         a = +split[0]
//         operator = split[1]
//         b = +split[2]
//         if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
//             return NaN;
//           }
//         return this.methods[operator](a, b)
//     }
// }

// let calc = new Calculator;

// alert( calc.calculate("3 * 7") ); // 10
// let arr = [5, 2, 1, -10, 8];
// const sortByDescending = (a,b) => a<b 
// arr.sort(sortByDescending)

// alert( arr ); // 8, 5, 2, 1, -10



// function filterRange (arr, a , b) {
//     let newArr=[]
//     for(let i = 0; i < arr.length;i++){
//         if (arr[i]>=a && arr[i]<=b) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }


// let arr = [5, 3, 8, 1]

// let filtered = filterRange(arr, 1, 4)

// alert( filtered ) // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)


// function extractCurrencyValue (str) {
//     let newStr = str.slice(1)
//     return +newStr
// }
// alert( extractCurrencyValue('$120') === 120 );


// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }


// function random (min, max) {
//     return min + Math.random() * (max-min)
// }
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

// function Calculator () {
    
//     this.read = function () {
//         let userInput1 = +prompt('Введите значение', '')
//         let userInput2 = +prompt('Введите значение', '')
//         this.userInput1 = userInput1
//         this.userInput2 = userInput2
//     }

//     this.sum = function () {
//         let sum = 0
//         sum = this.userInput1 + this.userInput2
//         return sum
//     }

//     this.mul = function () {
//         let div = 0
//         div = this.userInput1 / this.userInput2
//         return div
//     }
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );



// function sumSalaries (obj) {
//     let sum = 0
//     if(!isEmpty(obj)){
//         for( let key in obj) {
//         sum+= obj[key]
//         }
//         return sum
//     }
//     return 0
// }

// function isEmpty (obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }

// let salaries = {}

// alert(sumSalaries(salaries))



// function isEmpty (obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// function findMiddle (arr){
//     for (let i = 0; i<arr.length; i++) {
//         if (i === Math.floor((arr.length)/2)) {
//             arr[i]='Классика'
//         }
//     }
// }


// let styles = ['Джаз', 'Блюз']
// styles.push('Рок-н-ролл')
// styles.push('Хип-хоп')
// styles.push('Рэп')
// console.log(styles)
// findMiddle(styles)
// console.log(styles)
// alert( styles.shift() )
// styles.unshift('Рєгги')
// console.log(styles)






// const number = +prompt('Введите число между 0 и 3', '');
// switch(number) {
//     case 0:
//         alert('Вы ввели число 0');
    
//     case 1:
//         alert('Вы ввели число 1');

//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
// }