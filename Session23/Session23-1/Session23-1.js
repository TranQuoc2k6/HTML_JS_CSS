let arr = [];
let value = [];
let count = 0;
for (let i = 0; i < 10; i++) {
    arr[i] = +prompt(`Nhap vao so thu ${i + 1}`);
    if (arr[i] >= 10) {
        value.push(arr[i]);
        count++;
    }
}
if (count > 0) {
    console.log(`So lon hon 10 trong mang la ${value}`);
} else {
    console.log(`Khong co so nao lon hon 10`)
}
