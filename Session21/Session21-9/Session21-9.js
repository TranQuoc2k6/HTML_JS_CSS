let number = +prompt("Nhap so bat ky:");
let flag = true;
if (number < 2) {
    console.log("khong phai so nguyen to");
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            flag = false
            break;
        }
    }
    if (flag) {
        console.log("so nguyen to");
    } else {
        console.log("khong phai so nguyen to");
    }
}