let arr = [];
let choice;
let menu = `
=====MENU=====
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
4. Tính tổng và trung bình cộng của các số dương trong mảng
5. Đảo ngược mảng
6. Kiểm tra mảng có đối xứng không
7. Thoát chương trình
===>Lựa chọn của bạn:`;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let number = +prompt("Nhap so luong phan tu muon nhap:");
            for (let i = 0; i < number; i++) {
                let newElement = +prompt("Nhap phan tu muon nhap:");
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
                if (maxElement > arr[i]) {
                    maxElement = arr[i];
                }
            }
            console.log(arr[i]);
            break;
        case 4:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] >= 0) {
                    sum += arr[i]
                }
            }
            console.log(`Tong cac so duong la: ${total}`)
            let average = sum / arr.length;
            console.log(`Trung binh cong la ${average}`)
            break;
        case 5:
            if (arr.length === 0) {
                console.log("Mang khong ton tai");
                break;
            }
            for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            console.log(`Mang sau khi dao: ${arr.join(", ")}`);
            break;

        case 6:
            arr.reverse();
            console.log("Đã đảo ngược các hàng trong mảng!");
            break;
        case 7:
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }
}