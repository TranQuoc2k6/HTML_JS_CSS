let array = [2, 5, 7, 4, 1, 8, 6];
let number = +prompt("Nhap mot so bat ky:");
if (array.includes(number)) {
    console.log("Bingo");
} else {
    console.log("Chuc ban may man lan sau");
}