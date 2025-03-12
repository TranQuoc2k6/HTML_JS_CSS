let arr = [];
let numberElement = +prompt("Nhap so phan tu bat ki");
for (let i = 0; i < numberElement; i++) {
    arr[i] = +prompt(`Nhap phan tu thu ${i + 1}:`);
}
function checkNumber(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && Number.isInteger(arr[i])) {
            count++;
        }
    }
    return count;
}

let value = checkNumber(arr);
console.log(`Co ${value} so nguyen duong`);