// // reduce
// const numbers = [1,2,3,4];
// const sum = numbers.reduce((total, num)=> total + num);
// console.log(sum);

// // map
// const numbers1 = [1,2,3];
// const double = numbers1.map(num => num * 2);
// console.log(double);

// // filter
// const numbers2 = [1,2,3,4];
// const evens = numbers2.filter(num => num % 2 === 0);
// console.log(evens)

// // HOF;
// function multipliter(factor){
//     return function(num){
//         return num * factor;
//     }
// };
 
// const double1 = multipliter(2);
// console.log(double1(6));
 
let num = [1,2,3,4,5,6,7,8,9,10];

let result = num.filter((value, index) => value < 2 == 0);
console.log(result);
