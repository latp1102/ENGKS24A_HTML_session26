function check(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có dữ liệu";
    }

    if (!arr.every((value, index) => Number.isInteger(value))) {
        return "Dữ liệu không hợp lệ";
    }

    let squaredArray = arr.map((value, index) => value ** 2);
    let evenNumbers = squaredArray.filter((value, index) => value % 2 === 0);

    return evenNumbers;
}
console.log(check([2, 5, 10]));  
console.log(check([]));          
console.log(check("abc"));    