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
Lựa chọn của bạn: 
`;

while (choice !== 6) {
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
            
    }   
}
