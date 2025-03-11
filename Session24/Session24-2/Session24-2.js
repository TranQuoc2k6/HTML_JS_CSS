let arr = [];
let choice;
let menu = `
=====MENU=====
1. Nhập mảng số nguyên
2. Hiển thị mảng
3. Tìm các phần tử chẵn và lẻ
4. Tính trung bình cộng của mảng
5. Xóa phần tử tại vị trí chỉ định
6. Tìm phần tử lớn thứ hai trong mảng
7. Thoát chương trình
----->Lựa chọn của bạn:`;

while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let number = +prompt("Nhap so phan tu muon nhap:")
            for (let i = 0; i < number; i++) {
                let newElement = +prompt("Phan tu muon nhap:");
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
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] % 2 === 0) {
                    console.log(`${arr[i]} la so chan`);
                } else {
                    console.log(`${arr[i]} la so le`);
                }
            }
            break;
        case 4:
            let sum = 0;
            let average = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
                average = sum / arr.length
            }
            console.log(`Trung binh cong cua mang la: ${average}`);
            break;
        case 5:
            let deleteIndex = +prompt("Nhap phan tu muon xoa:");
            arr.splice(deleteIndex, 1);
            console.log(`Mang sau khi xoa la: ${arr}`)
            break;
        case 6:
            let newarr = [...new Set(arr)];
            newarr.sort((a, b) => a - b);
            console.log(newarr);
            console.log(`So lon thu hai la ${newarr[newarr.length - 2]}`);
            break;
        case 7:
            break;

        default:
            console.log("Lua chon khong hop le");
            break;
    }
}