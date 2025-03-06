let number = +prompt("Nhap so nguyen to:");
let primes;
let flag = true;
if (isNaN(number) || number < 2) {
  console.log("Khong hop le");
} else {
  for (let i = 2; i <= number; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      primes += i + " ";
    }
  }
  console.log(`${primes}`);
}