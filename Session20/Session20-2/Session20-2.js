let number = +prompt("Nhap so bat ky:");
let result = 0;
if (number > 0) {
    for (let i = 1; i <= number; i++) {
        if (i % 5 === 0) {
            result = result + i + ", ";
        } else {
            result;
        }
    }
    result = result.slice(0, -2);
    console.log(`Cac so chia het cho 5 tu 1 den ${number} la: ${result}`);
} else {
    console.log(`Du lieu nhap vao khong hop le`);
}

