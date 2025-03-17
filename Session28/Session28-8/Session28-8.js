let choice;
let arr = [];
let id = 1;
let menu = `
1.Thêm nhân viên mới.
2.Xóa nhân viên theo id
3.Cập nhật mức lương của nhân viên theo id
4.Tìm kiếm nhân viên theo tên.
`;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let userName = prompt("Nhap ten day du: ");
            let positions = prompt("Nhap chuc vu:");
            let money = prompt("Nhap luong: ");
            const newUser = {
                id: id++,
                name: userName,
                position: positions,
                salary: money,
            };
            arr.push(newUser);
            console.table(arr);
            break;
        case 2:
            let deleteid = +prompt("Nhap id can xoa: ");
            let indexDelete = arr.findIndex((function (num) {
                return num.id === deleteid;
            }));
            console.log(indexDelete);
            if (deleteid !== -1) {
                arr.splice(indexDelete, 1);
                console.table(arr);
            } else {
                console.log("khong tim thay id nguoi dung");
            }
            break;
        case 3:
            let idEdit = +prompt("Nhap id can sua:");
            let indexEit = arr.findIndex(function (num) {
                return num.id == idEdit;
            });
            if (indexEit !== -1) {
                let user = arr[idEdit];
                console.table(`Ten: ${user.userName}, Luong: ${user.salary}`);
                let salaryNew = +prompt(`Nhap luong moi cho ${user.userName} `);
                user.salary = salaryNew;
                console.table(` da cap nhat thanh cong luong cho Ten: ${user.userName}, Luong: ${user.salary}`);
            } else {
                console.log("khong tim thay id nguoi dung");
            }
            break;
        case 4:
            let searchName = prompt("Nhap ten tim kiem:").toLowerCase().trim()
            let indexName = arr.findIndex(function (num) {
                return num.userName.toLowerCase().trim() === searchName;
            })
            if (indexName !== -1) {
                let userCheck = arr[indexName];
                console.table([userCheck]);
            } else {
                console.log("Khong tim thay nhan vien");
            }
            break;
    }
}