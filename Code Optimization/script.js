//270
// let num = 123;
// let numStr = String(num);
// let firstDigit = numStr[0];

// if (firstDigit === '1' || firstDigit === '2') {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// let date = new Date();
// let dayOfWeek = date.getDay();

// if (dayOfWeek === 0 || dayOfWeek === 6) {
//     console.log('выходной');
// } else {
//     console.log('рабочий');
// }

// let date = new Date();
// let year = date.getFullYear();

// let res = (year >= 2020 && year <= 2030) ? 'год ' + year + ' подходит' : 'год ' + year + ' не подходит';

// console.log(res);

//271
// let num = 1233456789;
// let sumSquare = getSumSquare(num);

// if (sumSquare >= 10 && sumSquare <= 100) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

// function getSumSquare(num) {
//     let digits = String(num).split('');
//     let sum = 0;

//     for (let digit of digits) {
//         sum += digit ** 2;
//     }

//     return sum;
// }

//272
// let sum = 0;

// for (let elem of arr) {
//     sum += elem;
// }

// let avg = sum / arr.length;
// console.log(avg);


// let curr = new Date();
// let targetDay = curr.getDay();

// for (let i = 1900; i <= 2100; i++) {
//     let date = new Date(i, curr.getMonth(), curr.getDate());

//     if (date.getDay() === targetDay) {
//         console.log(date);
//     }
// }


// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let key in obj) {
//     let firstDigit = String(obj[key])[0];

//     if (firstDigit === '1' || firstDigit === '2') {
//         sum += obj[key];
//     }
// }

// console.log(sum);

//274
// let str = 'http://code.mu';
// console.log(str.startsWith('http'));


// let arr = fillArr('x', 5);
// console.log(arr);

// function fillArr(val, amount) {
//     return Array(amount).fill(val);
// }

//275
// let n = 1000;
// let count = Math.floor(n / 5);
// console.log(count);

// let n = 1000000;
// let digits = Math.floor(Math.log10(n)) + 1;
// console.log(digits);
