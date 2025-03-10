let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Nhap vao phan tu thu ${i + 1}`);
}
let max = arr[0];
let indexMax = 0;
for (let i = 0; i < 10; i++) {
    if (arr[i] > max) {
        max = arr[i];
        indexMax = i + 1;
    }
}
console.log(`So lon nhat: ${max}`);
console.log(`Vi tri: ${indexMax}`);

