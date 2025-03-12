// highter order function
// let result = increase10AndSquare([1,2,3,4]);
// let result2 = increase10AndSquare([-1,-2,-3,-4]);

// function increase10AndSquare(arr){

//     for (const i in arr) {
//         arr[index] = arr[index] + 10;
//         arr[index] = arr[index] ** 2;
//     }
//     return arr;
// }

// function increase10AndSquare(arr){
//     for (let index in arr){
//         arr[index] = ar[index] + 10;
//     };
//     return function(){
//         for (let index in arr){
//             arr[index] = arr[index] ** 2;
//         }
//         return arr;
//     };
// }

// console.log(result);
// console.log(result2);
// let result = applyFormula([1,2,3,4], function(el){
//     el = el + 10;
//     return el;
// });
// console.log(result);
// console.log(result2);

// let result2 = applyFormula([-1,-2,-3,-4], function(el) {
//     el = el ** 2;
// });
// function applyFormula(arr, fn) {
//     let result = [];
//     for (let index in arr) {
//         let el = fn(arr[index]);
//         result.push(el);
//     }
//     return result;

// }


// forEach
// undefined
// kko thể dừng vòng lặp
// let arr = [10,20,30,40];
// arr.forEach(function(element, index){

//     console.log(element, index);

// });


/// Map
// tạo mảng mới áp dụng lên
// trả về 1 mảng rỗng mới
// thay đổi định dạng dữ liệu
/*let arr = [10,20,30,40];
let newArr = arr.map(function(element, index){
    return element + 10;
});
console.log(newArr);*/ // 20 30 40 50

// Filter
// lọc phần tử dựa trên điều kiện
//mảng rỗng[]
let arr = [10,20,30,40];
let newArr = arr.filter(function(element ,index){
    return element > 20 && element < 40;
});
console.log(newArr);// out put 30*/



// reduce
// let arr = [10, 20, 30, 40];
// let newArr = arr.reduce(function (acc, cur) {
 
//     acc = acc + cur;
//     return acc ;
// },0);

// console.log(newArr);


// some
// let arr = [10, 20, 30, 40];
// let newArr = arr.some(function(element, index){
//     return element > 40;
// });
// console.log(newArr);// flase


// every
// let arr = [10, 20, 30, 40];
// let newArr = arr.every(function(element, index){
//     return element > 5;
// });
// console.log(newArr);// true
