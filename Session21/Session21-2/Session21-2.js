let evenCount = 0;
let oddCount = 0;
let input;
for (let i = 0; i < 5; i = i + 1) {
    input = +prompt("Mời bạn nhập vào số bất kỳ");
    if (input % 2 === 0) {
        evenCount = evenCount + 1;
    } else {
        oddCount = oddCount + 1;
    }
}
console.log("Số lượng số chẵn:", evenCount);
console.log("Số lượng số lẻ:", oddCount);