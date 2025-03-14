function stype(arr, n) {
    let result = []; 
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n));
    }
    console.log(result);
}
let arr = []
let numberStudents = +prompt("So luong sinh vien muon them")
if (Number.isInteger(numberStudents) && numberStudents > 0) {
    for (let i = 0; i < numberStudents; i++) {
        let inputElement = prompt(`Nhap phan tu cho mang: [${i + 1}]`);
        input.push(inputElement);
    }
    let arrChild = +prompt("Nhap mang con:");
    stype(numberStudents , arrChild );
} else {
    console.log("so luong khong hop le");
}