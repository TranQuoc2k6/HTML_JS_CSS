function calculate(arr) {
    if (!Array.isArray(arr) || arr.some(isNaN)) {
        return console.log("ky tu khong hop le");
    }
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
}

console.log(calculate([1, 2, 3, 5])); 
console.log(calculate([1, 2, 4, 5])); 
console.log(calculate("abc")); 
