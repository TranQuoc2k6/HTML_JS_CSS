let arr = [];
let choice;
let n, m;
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
            n = +prompt("Nhap so hang: ");
            m = +prompt("Nhap so cot: ");
            if (n > 0 && m > 0) {
                arr = [];
                for (let i = 0; i < n; i++) {
                    arr[i] = [];
                    for (let j = 0; j < m; j++) {
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
                console.log("Mang da cap nhat");
            } else {
                let matrix = arr.map(row => row.join("\t")).join("\n");
                console.log(`Mảng 2 chiều:\n${matrix}`);
            }
            break;

        case 3:
            if (arr.length === 0) {
                console.log("Mảng chưa được nhập!");
            } else {
                let sum = arr.flat().reduce((acc, val) => acc + val, 0);
                console.log(`Tổng các phần tử trong mảng là: ${sum}`);
            }
            break;

        case 4:
            if (arr.length !== arr[0].length) {
                console.log("Mang khong thich hop");
                break;
            }

            let dgcheochinh = 0;
            for (let i = 0; i < arr.length; i++) {
                dgcheochinh += arr[i][i];
            }

            console.log(`Tổng đường chéo chính là: ${dgcheochinh}`);
            break;


        case 5:
            if (arr.length === 0 || arr.length !== arr[0].length) {
                console.log("Mảng không hợp lệ để tính tổng đường chéo phụ.");
            } else {
                let sumSecondaryDiagonal = 0;
                for (let i = 0; i < arr.length; i++) {
                    sumSecondaryDiagonal += arr[i][arr.length - 1 - i];
                }
                console.log(`Tổng đường chéo phụ: ${sumSecondaryDiagonal}`);
            }
            break;
        case 6:
            if (arr.length === 0) {
                console.log("Mảng rỗng! Vui lòng nhập mảng trước.");
            } else {
                let type = prompt("Nhập 'h' để tính theo hàng, 'c' để tính theo cột: ").toLowerCase();
                if (type === "h") {
                    let rowIndex = +prompt("Nhập chỉ số hàng (bắt đầu từ 0): ");
                    if (rowIndex >= 0 && rowIndex < arr.length) {
                        let avg = arr[rowIndex].reduce((sum, num) => sum + num, 0) / arr[rowIndex].length;
                        console.log(`Trung bình cộng hàng ${rowIndex}: ${avg}`);
                    } else {
                        console.log("Chỉ số hàng không hợp lệ!");
                    }
                } else if (type === "c") {
                    let colIndex = +prompt("Nhập chỉ số cột (bắt đầu từ 0): ");
                    if (colIndex >= 0 && colIndex < arr[0].length) {
                        let sumCol = 0;
                        for (let i = 0; i < arr.length; i++) {
                            sumCol += arr[i][colIndex];
                        }
                        console.log(`Trung bình cộng cột ${colIndex}: ${sumCol / arr.length}`);
                    } else {
                        console.log("Chỉ số cột không hợp lệ!");
                    }
                } else {
                    console.log("Lựa chọn không hợp lệ!");
                }
            }
            break;

        case 7:
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }
}