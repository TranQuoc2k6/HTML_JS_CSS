let arr = [];
let choice;
let row;
let col;
let menu = `
--------------Menu------------
1. Nhập mảng 2 chiều
2. Hiển thị mảng
3. Tính tổng các phần tử trong mảng
4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
5. Tính trung bình cộng các phần tử của một hàng cụ thể
6. Đảo ngược các hàng trong mảng
7. Thoát chương trình
`;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            row = +prompt("Nhap so hang: ");
            col = +prompt("Nhap so cot: ");
            if (row > 0 && col > 0) {
                arr = [];
                for (let i = 0; i < row; i++) {
                    arr[i] = [];
                    for (let j = 0; j < col; j++) {
                        arr[i][j] = +prompt(`Phan tu arr[${i}][${j}]: `);
                    }
                }
                console.log("Mang da duoc nhap");
            } else {
                console.log("Mang khong hop le");
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Mang khong hop le");
            } else {
                let matrix = arr.map(row => row.join("")).join("");
                console.log(`Mang 2 chieu la:${matrix}`);
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mang khong hop le");
            } else {
                let sum = arr.flat().reduce((acc, val) => acc + val, 0);
                console.log(`Tong phan tu cac mang: ${sum}`);
            }
            break;

        case 4:
            if (arr.length !== arr[0].length) {
                console.log("Mang khong thich hop");
                break;
            }
            let max = 0;
            for (let i = 0; i < arr.length; i++) {
                max += arr[i][i];
            }

            console.log(`${max}`);
            break;


        case 5:
            if (arr.length === 0 || arr.length !== arr[0].length) {
                console.log("Mang khong hop le");
            } else {
                let sumSecondary = 0;
                for (let i = 0; i < arr.length; i++) {
                    sumSecondary += arr[i][arr.length - 1 - i];
                }
                console.log(`${sumSecondary}`);
            }
            break;
        case 7:
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }
}