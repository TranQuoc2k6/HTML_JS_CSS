let number = +prompt("Nhap so nguyen to:");
let primes;
if (isNaN(number) || number < 2) {
  console.log("Khong hop le");
} else {
  for (let i = 2; i <= number; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes += i + " ";
    }
  }
  console.log(`${primes}`);
}