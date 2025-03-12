let arr = [];
let choice;
let row, col;
let menu = `
----------Menu---------
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
            row = +prompt("Nhap so hang trong mang: ");
            col = +prompt("Nhap so cot trong mang: ");
            if (row > 0 && col > 0) {
                for (let i = 0; i < row; i++) {
                    arr[i] = [];
                    for (let j = 0; j < col; j++) {
                        arr[i][j] = +prompt(` arr[${i}][${j}]: `);
                    }
                }
                console.log("Mang da duoc nhap");
            } else {
                console.log("Mang khong kha dung");
            }
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Mang khong ton tai");
            } else {
                let matrix = arr.map(row => row.join("")).join("");
                console.log(`:${matrix}`);
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mang khong ton tai");
            } else {
                let sum = arr.flat().reduce((acc, val) => acc + val, 0);
                console.log(`Tong phan tu trong mang la: ${sum}`);
            }
            break;

        case 4:
            if (arr.length === 0) {
                console.log("Mang khong ton tai");
            } else {
                let max = arr[0][0], indexRow = 0, indexCol = 0;
                for (let i = 0; i < row; i++) {
                    for (let j = 0; j < col; j++) {
                        if (arr[i][j] > max) {
                            max = arr[i][j];
                            indexRow = i;
                            indexCol = j;
                        }
                    }
                }
                console.log(`Phan tu lon nhat la: ${max}, vi tri [${indexRow}][${indexCol}]`);
            }
            break;

        case 5:
            if (arr.length === 0) {
                console.log("Mang khong ton tai");
            } else {
                let rowInput = +prompt(`Nhập số hàng (từ 1 đến ${n}): `);
                if (rowInput < 1 || rowInput > n) {
                    console.log("Khong hop le");
                } else {
                    let sumRow = arr[row - 1].reduce((acc, val) => acc + val, 0);
                    let avg = sumRow / m;
                    console.log(`Trung binh cong cua hang ${row} la: ${avg.toFixed(2)}`);
                }
            }
            break;

        case 6:
            if (arr.length === 0) {
                console.log("Mang khong ton tai");
            } else {
                arr.reverse();
                console.log(arr);
            }
            break;

        case 7:
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }
}