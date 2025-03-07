let numbers = +prompt("Nhap chuoi so bat ky > 0");
if (/^\d+$/.test(numbers) > 0) {
    let reversed = numbers.split('').reverse().join('');
    console.log(reversed);
} else {
    console.log("Nhap lai");
}