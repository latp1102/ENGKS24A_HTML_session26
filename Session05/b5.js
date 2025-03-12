function check(arr) {
    if (!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";  
    } 
    if (arr.length === 0){
        return "Mảng ko có dữ liệu";
    }

    let max = Math.max(...arr);
    let position = arr.indexOf(max);

    return `max = ${max} position: ${position}`;
}

console.log(check([10, 9, 5, 11, 24, 5])); 
console.log(check([])); 
console.log(check("abc")); 
