function check(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let result = arr.filter((value,index) => Number.isInteger(value) && value >= 10);

    return result;
}
console.log(check([1,22,10,9,8])); 
console.log(check([])); 
console.log(check("abc")); 