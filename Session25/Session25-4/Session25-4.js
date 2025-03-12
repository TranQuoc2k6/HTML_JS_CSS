function prime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Khong phai la so nguyen to");
            return;
        }
    }
    console.log("La so nguyen to");
}

let a = +prompt("Nhap so nguyen to")
prime(a);