function check(arr) {
    if (!Array.isArray(arr)) {
        return "Dữ liệu không hợp lệ";
    }

    if (arr.length === 0) {
        return "Mảng không có phần tử nào";
    }
    let result = [];
    for (let date of arr) {
        if (typeof date === "string") {
            let parts = date.split("-"); 
            if (parts.length === 3) {
                let year = parts[0];
                let month = parts[1];
                let day = parts[2];
                if (!isNaN(year) && !isNaN(month) && !isNaN(day) && year.length === 4) {
                    result.push(`${day}/${month}/${year}`); 
                }
            }
        }
    }
    return result;
}
console.log(check(["2025-03-10","2024-12-25","2023-07-01"])); 
console.log(check([])); 
console.log(check("abc")); 