let arr = [];
let n = +prompt("So phan tu muon nhap");
for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Nhap so phan tu thu ${i + 1}`);
}
let value = [];
let check = 0;
for (let i = 0; i < n; i ++) {
    if(!isNaN(arr[i])) {
        value.push(arr[i]);
        check++;
    }
}
if(check === 0) {
    console.log("Ky tu khong ton tai");
} else {
    console.log(value);
}