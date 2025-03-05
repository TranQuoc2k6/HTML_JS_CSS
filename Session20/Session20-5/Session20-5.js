let a = +prompt("Nhap vao co so a:");
let b = +prompt("Nhap vao so mu b:");
let result = Math.pow(a, b);
if (isNaN(a) || isNaN(b)) {
    console.log("Khong hop le");
} else {
    console.log(result);
}
