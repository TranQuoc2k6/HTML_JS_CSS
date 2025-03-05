let number = +prompt("Nhap so nguyen bat ky");
let sum = 0;
if (number > 0) {
    for (let i = 1; i <= number; i++) {
        sum = i + sum;
    }
    console.log(sum);
} else {
    console.log(`Du lieu nhap vao khong hop le`);
}