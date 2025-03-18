let todoList = [];
let choice;
let menu = `
====================MENU====================
1. Thêm món ăn vào danh mục
2. Xóa món ăn theo tên
3. Cập nhật thông tin món ăn theo tên
4. Hiển thị toàn bộ menu
5. Tìm kiếm món ăn theo tên
6. Thoát
---------->Lựa chọn của bạn:
`;
while (choice !== 6) {
    choice = +prompt(menu);
    switch (choice) {
        case 1: {
            let category = prompt("Nhập tên danh mục:");
            let nameEat = prompt("Nhập tên món ăn:");
            let price = +prompt("Nhập giá món ăn:");
            let comment = prompt("Nhập mô tả món ăn:");
            let menuChild = null;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].menuChild === category) {
                    menuChild = todoList[i];
                    break;
                }
            }
            if (!menuChild) {
                menuChild = { menuChild: category, monAn: [] };
                todoList.push(menuChild);
            }
            menuChild.monAn.push(
                {
                    id: Date.now(),
                    nameEat: nameEat,
                    price: price,
                    comment: comment
                });
            console.log("Đã thêm món ăn thành công!");
            break;
        }

        case 2: {
            let category = prompt("Nhập tên danh mục chứa món cần xóa:");
            let deleteEat = prompt("Nhập tên món ăn cần xóa:");
            let menuChild = null;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].menuChild === category) {
                    menuChild = todoList[i];
                    break;
                }
            }
            if (!menuChild) {
                console.log("Không tìm thấy danh mục");
            } else {
                for (let i = 0; i < menuChild.monAn.length; i++) {
                    if (menuChild.monAn[i].tenMon === deleteEat) {
                        menuChild.monAn.splice(i, 1);
                        break;
                    }
                }
                if (menuChild.monAn.length === 0) {
                    for (let i = 0; i < todoList.length; i++) {
                        if (todoList[i].menuChild === category) {
                            todoList.splice(i, 1);
                            break;
                        }
                    }
                }
                console.log("Xóa món ăn thành công!");
            }
            break;
        }

        case 3: {
            let category = prompt("Nhập tên danh mục chứa món cần cập nhật:");
            let updateName = prompt("Nhập tên món ăn cần cập nhật:");
            let menuChild = null;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].menuChild === category) {
                    menuChild = todoList[i];
                    break;
                }
            }
            if (!menuChild) {
                console.log("Không tìm thấy danh mục");
            } else {
                for (let i = 0; i < menuChild.monAn.length; i++) {
                    if (menuChild.monAn[i].tenMon === updateName) {
                        menuChild.monAn[i].tenMon = prompt(`Tên mới (${menuChild.monAn[i].tenMon}):`) || menuChild.monAn[i].tenMon;
                        menuChild.monAn[i].gia = +prompt(`Giá mới (${menuChild.monAn[i].gia}):`) || menuChild.monAn[i].gia;
                        menuChild.monAn[i].moTa = prompt(`Mô tả mới (${menuChild.monAn[i].moTa}):`) || menuChild.monAn[i].moTa;
                        break;
                    }
                }
                console.log("Cập nhật món ăn thành công!");
            }
            break;
        }

        case 4: {
            if (todoList.length === 0) {
                console.log("Menu hiện đang trống");
            }else {
                console.table(todoList);
            }
            break;
        }

        case 5: {
            let searchName = prompt("Nhập tên món ăn cần tìm:");
            let result = [];
            for (let i = 0; i < todoList.length; i++) {
                for (let j = 0; j < todoList[i].monAn.length; j++) {
                    if (todoList[i].monAn[j].tenMon.includes(searchName)) {
                        result.push({ menuChild: todoList[i].menuChild, ...todoList[i].monAn[j] });
                    }
                }
            }
            result.length ? console.table(result) : console.log("Không tìm thấy món ăn nào");
            break;
        }

        default:
            alert("Lựa chọn không hợp lệ");
    }
}