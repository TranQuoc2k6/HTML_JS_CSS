let choice;
let arr = [];
let menu = `
1. Nhập danh sách số nguyên.
2. Tính trung bình các số.
3. Tìm số chẵn lớn nhất.
4. Tìm số lẻ nhỏ nhất.
5. Thoát.`;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            inputInteger();
            break;
        case 2:
            average();
            break;
        case 3:
            searchEvenMax();
            break;
        case 4:
            searchOddMin();
            break;
        case 5:
            break;
        default:
            console.log("Lua chon khong hop le");
            break;
    }
}

function inputInteger() {
    let inputNumber = +prompt("Nhap so phan tu muon nhap");
    for (let i = 0; i < inputNumber; i++) {
        let number = +prompt(`Nhap phan tu thu ${i + 1}`);
        arr.push(number);
    }
    console.log(arr);
}

function average() {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let divide = sum / arr.length;
    console.log(`Trung binh cong cac so trong mang la: ${divide}`);
}

// function searchEvenMax() {
//     let evenNumber = arr.filter(num => num % 2 === 0);
//     let maxElement = evenNumber[0];
//     for (let i = 0; i < evenNumber.length; i++) {
//         if (maxElement < evenNumber[i]) {
//             maxElement = evenNumber[i];
//         }
//     }
//     if (evenNumber.length === 0) {
//         console.log(`So chan lon nhat trong mang khong ton tai`);
//     } else {
//         console.log(`So chan lon nhat trong mang la: ${maxElement}`);
//     }
// }

function searchEvenMax() {
    let evenNumber = arr.filter(num => num % 2 === 0);
    let maxElement = Math.max(...evenNumber);
    if (evenNumber.length === 0) {
        console.log(`So chan lon nhat trong mang khong ton tai`);
    } else {
        console.log(`So chan lon nhat la: ${maxElement}`);
    }
}

// function searchOddMin() {
//     let oddNumber = arr.filter(num => num % 2 !== 0);
//     let minElement = oddNumber[0];
//     for (let i = 0; i < oddNumber.length; i++) {
//         if (minElement > oddNumber[i]) {
//             minElement = oddNumber[i];
//         }
//     }
//     if (oddNumber.length === 0) {
//         console.log(`So le be nhat trong mang khong ton tai`);
//     } else {
//         console.log(`So le be nhat trong mang la: ${minElement}`);
//     }
// }

function searchOddMin() {
    let oddNumber = arr.filter(element => element % 2 !== 0);
    let minElement = Math.min(...oddNumber);
    if(oddNumber.length === 0) {
        console.log(`So le be nhat trong mang khong ton tai`);
    } else {
        console.log(`So le be nhat trong mang la: ${minElement}`);
    }
}