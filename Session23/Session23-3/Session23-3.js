let arr = [];
let number = [];
let n = +prompt("Hay nhap so phan tu cua mang:");
if (n < 0) {
    console.log("So phan tu khong hop le");
} else if (n === 0) {
    console.log("Mang rong");
} else {
    for (let i = 0; i < n; i++) {
        arr[i] = +prompt(`Mời bạn nhập vào phần tử thứ ${i + 1}`);
        if (arr[i] < 0) {
            number.push(arr[i]);
        }
    }
    console.log(number.length > 0 ? `Cac so am: ${number}` : "Khong co so am nao");
}
