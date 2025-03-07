let numbers = prompt("Nhap chuoi so bat ky");
let frequency = {};
for (let char of numbers) {
    if (!isNaN(char) && char !== " ") {
        frequency[char] = (frequency[char] || 0) + 1;
    }
}
console.log("So lan xuat hien")
alert("So lan xuat hien:");
for (let num in frequency) {
    console.log(`So ${num} xuat hien ${frequency[num]} lan`);
    alert(`So ${num} xuat hien ${frequency[num]} lan`)
}