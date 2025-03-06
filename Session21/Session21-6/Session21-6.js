let number = +prompt("Nhap mot so bat ky");
if (Number.isInteger(number)) {
    if (number > 0) {
        for (let i = 0; i <= number; i++) {
            if (number % i === 0) {
                console.log(i);
            }
        }
    } else if( number < 0) {
        for (let i = 0; i >= number; i--) {
            if (number % i === 0) {
                console.log(i);
            }
        }
    }
} else {
    console.log("So khong hop le")
}