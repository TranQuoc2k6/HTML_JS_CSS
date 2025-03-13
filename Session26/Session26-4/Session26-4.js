let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 13, 17, 18, 19, 20];
function isPrime(element) {
    if (element < 2) return false;
    for (let i = 2; i <= Math.sqrt(element) ; i++) {
        if (element % i === 0) return false;
    }
    return true;
}

let result = arr.filter(isPrime);
console.log(result);