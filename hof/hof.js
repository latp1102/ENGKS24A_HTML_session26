// HOF
/*const greet = (name, callback) => {
    callback();
    console.log(`Hello ${name}`);
};
const sayHello = () => {
    console.log(`Say hello`);
    
};

greet ("Nguyễn Văn A", sayHello);


const readNumber = () => {
    for (let i = 0; i <= 10 ;i++){
        console.log(i);
        
    }
};
const renderNumber = (callback) => {
    callback();
};

renderNumber(readNumber);*/

// method array
// HÀM forEach
const numbers = [1,2,3,4,5,6,7,8,9,10];

// vòng lặp forEach
const result = numbers.forEach((value, index) => {
    console.log("Value - index - thisArray", value, index);
    return 10;
});

// console.log("Result", result);

// hàm filter



// dùng để lặp qua các phần tử trong mảng. Trả về 1 một mới chứa các phần tử mà nó thỏa mãn điều kiện
// nếu ko thỏa mãn thì trả về [];
const evensNumber = numbers.filter((value, index) => value % 2 === 0);
console.log(evensNumber);

// tìm kiếm 1 phần tử bất kì trong mảng
// const findNumber = number.find((value) => value === 1);
// console.log(findNumber);
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// hàm map(); dùng để lặp qua các phần tử của mảng, có số lượng ptu = số lượng ptu của mảng cũ nhưng đã được chỉnh sửa
const num = numbers.map((value, index) => value * 2);
console.log(num);

const student = ["Nguyễn Văn A", "Trần Văn B"];
const students =student.map((value, index) => {
    return `
    <li>${value}</li>`
});
console.log(students);


// hàm reduce
const carts = [100,200,300,400,500];
let total = 0;
for (let i = 0; i < carts.length;i++){
    console.log(`Tại vị trí thứ ${i} total = ${total}`);
    total += carts[i];
}
console.log(total);


const cat = carts.reduce((previousValue, currentValue, index) =>{
    console.table(index,previousValue,currentValue);
    
    return previousValue + currentValue; 
    
}, 0);

console.log(cat);


// some pải đúng cả

const scores = [2,3,6,8,10];
const check = scores.every((value) => value % 2 === 0);
console.log(check);
//kiểm tra trong mảng scores chỉ cần có ít nhất 1 phần tử là số chẵn
// chỉ cần đúng 1
const check1 = scores.some((value) => value % 2 === 0);
console.log(check1);


//Fill
// const check3 = scores.fill(5, 0 , scores.length);
// console.log(check3);

// includes
const check4 = scores.includes(3, 0);
console.log(check4);

// concat() => dùng để nối mảng
const firstNumber = [1,2,3,4,5];
const secondNumber = [6,7,8,9,10];

const mer = secondNumber.concat(firstNumber).sort((a,b) => a - b);
console.log(mer);

const com = 'Rikkei Education 1';
const mer1 = com.split("");// chuỗi thành mảng
console.log(mer1);

const mer2 = mer1.join("-");
console.log(mer2);
// nếu eamil không bắt đầu với "demo", ko chứa ký tự
const eamil = "demo@gmail.com";
console.log(eamil.startsWith("demo"));
console.log(eamil.includes("@"));
console.log(eamil.endsWith(".com"));