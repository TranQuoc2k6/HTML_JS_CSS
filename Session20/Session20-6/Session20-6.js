let number = +prompt("Nhap vao mot so nguyen:");
for(let i = 2; i <= number; i++) {
    if( i % number === 0) {
        console.log("La so nguyen to");
    } else {
        console.log("Khong phai la so nguyen to")
    }
}