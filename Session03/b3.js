function check(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }

    return arr.filter((value,index) => typeof value === "string" && value.includes("@") && !value.includes(" "));
}

console.log(check(["john.doe@gmail.com","invalidemail.com","hello@domain.net","space@out.com"])); 
console.log(check([])); 
console.log(check("abc")); 
