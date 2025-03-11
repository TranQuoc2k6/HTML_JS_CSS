let arr = [];
let choice;
let menu = `
MENU------------
1. Nhập mảng
2. Hiển thị mảng
3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng
4. Tính tổng các phần tử trong mảng
5. Tìm số lần xuất hiện của một phần tử trong mảng
6. Sắp xếp mảng tăng dần
7. Thoát chương trình 
------>Lựa chọn của bạn: 
`;

while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let number = +prompt("Nhap vao so luong phan tu muon them vao mang:");
            for (let i = 0; i < number; i++) {
                let newElement = +prompt("Nhap phan tu muon them:");
                arr.push(newElement);
            }
            console.log(arr);
            break;

        case 2:
            for (let i = 0; i < arr.length; i++) {
                console.log(`${i}. ${arr[i]}`);
            }
            break;
        case 3:
            let maxElement = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > maxElement) {
                    maxElement = arr[i];
                }
            }
            console.log(`Phan tu lon nhat trong mang la: ${maxElement}`);

            let minElement = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (minElement > arr[i]) {
                    minElement = arr[i];
                }
            }
            console.log(`Phan tu nho nhat trong mang la: ${minElement}`);
            break;

        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            console.log(`Tong cac phan tu trong mang la: ${sum}`);
            break;

        case 5:
            let count = 0;
            let n = +prompt("Kiem tra phan tu:");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === n) {
                    count += 1;
                }
            }
            console.log(`So ${n} xuat hien ${count} trong mang`);
            break;

        case 6:
            console.log(arr.sort());
            break;

        case 7:
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }
}
