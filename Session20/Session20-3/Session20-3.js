let number = prompt("Nhap so doi xung:");
let numberReverse = number.split("").reverse().join("");
if (number === numberReverse) {
    alert("La so doi xung");
} else {
    alert("Khong phai so doi xung");
}
