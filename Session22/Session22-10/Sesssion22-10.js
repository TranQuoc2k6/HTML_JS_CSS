// B1:
let arr = [];
let choice;
let menu = `
MENU-----------
1. Nhập vào mảng
2. Hiển thị mảng
3. Thêm phần tử
4. Sửa phần tử
5. Xóa phần tử
6. Thoát
Lựa chọn của bạn: 
`;

while (choice !== 6) {
    // B2:
    choice = +prompt(menu);

    // B3:
    switch (choice) {
        case 1:
            let number = +prompt(
                "Mời bạn nhập vào số lượng phần tử muốn thêm vào mảng"
            );
            for (let i = 0; i < number; i++) {
                let newElement = +prompt("Mời bạn nhập phần tử muốn thêm vào mảng");
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
            let addIndex = +prompt(
                "Mời bạn nhập vị trí của phần tử muốn thêm vào mảng"
            );
            let newElement = +prompt(
                "Mời bạn nhập vào phần tử muốn thêm vào trong mảng"
            );
            arr.splice(addIndex, 0, newElement);
            break;
        case 4:
            let updateIndex = +prompt("Mời bạn nhập vào vị trí của phần tử muốn sửa");
            let updateElement = +prompt(
                "Mời bạn nhập vào giá trị mới của phần tử muốn sửa"
            );
            arr[updateIndex] = updateElement;
            break;
        case 6:
            // Dừng vòng lặp while tại đâyyyyy
            break;
    }
}