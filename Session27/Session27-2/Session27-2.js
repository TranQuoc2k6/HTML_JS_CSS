let listStudents = [];
let choice;
let menu = `
1. Nhập danh sách sinh viên.
2. Hiển thị danh sách sinh viên.
3. Tìm sinh viên theo tên.
4. Xóa sinh viên khỏi danh sách.
5. Thoát.`;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            inputStudents();
            break;
        case 2:
            showStudents();
            break;
        case 3:
            searchStudent();
            break;
        case 4:
            deleteStudent();
            break;
        case 5:
            break;
        default:
            console.log(`Lua chon khong hop le`);
            break;
    }
}

function inputStudents() {
    let numberElement = +prompt("Nhap so sinh vien muon nhap:");
    for (let i = 0; i < numberElement; i++) {
        let input = prompt(`Nhap sinh vien thu ${i + 1}:`);
        listStudents.push(input);
    }
}

function showStudents() {
    for (let i = 0; i < listStudents.length; i++) {
        console.log(`${i + 1}. ${listStudents[i]}`)
    }
}

function searchStudent() {
    let inputSearchName = prompt("Nhap ten sinh vien muon tim kiem:");
    let foundStudents = listStudents.filter(student => student.toLowerCase().includes(inputSearchName.toLowerCase()));

    if (foundStudents.length > 0) {
        foundStudents.forEach((student) => {
            console.log(`${student}`);
        });
    } else {
        console.log("Sinh vien khong co trong danh sach");
    }
}

function deleteStudent() {
    let inputDeleteName = prompt("Nhap ten sinh vien muon xoa:");
    let newStudentList = listStudents.filter(student => student.toLowerCase() !== inputDeleteName.toLowerCase());

    if (newStudentList.length < listStudents.length) {
        listStudents = newStudentList;
        console.log(`Xoa thanh cong`);
    } else {
        console.log("Sinh vien khong co trong danh sach ");
    }
}