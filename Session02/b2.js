function check(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    let result = arr.filter((value,index) => typeof value === "string" && value.length > 5);
    return result;
}
console.log(check(["apple","banana","cat","elephant","dog"])); 
console.log(check([])); 
console.log(check("abc")); 
