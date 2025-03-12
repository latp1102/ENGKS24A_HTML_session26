function isPrime(num) {
    if (num < 2 || !Number.isInteger(num)){
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

function filterPrimes(arr) {
    if (!Array.isArray(arr)){
        return "Dữ liệu không hợp lệ";
    }
        
    if (arr.length === 0){ 
        return "Mảng không có phần tử nào";
    }
    let primes = arr.filter(isPrime);
    return primes;
}
console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
console.log(filterPrimes([])); 
console.log(filterPrimes("abc")); 

