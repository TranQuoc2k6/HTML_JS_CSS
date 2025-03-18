const contact = [];
let choice;
let menu = `
=========== MENU ==========
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách văn bản.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xoá một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.
--------> Nhập lựa chọn của bạn:`;
while(choice !== 6) {
    choice = +prompt(menu);
    switch(choice) {
        case 1:
            // Thêm đối tượng Contact vào danh sách liên hệ.
            let userName = prompt("Nhập tên người liên hệ:");
            let email = prompt("Nhập email liên hệ: ");
            let phone = prompt("Nhập số điện thoại người liên hệ:");
            let contactChild = {
                id: Math.random(),
                userName: userName,
                email: email,
                phone: phone,
            };
            contact.push(contactChild);
            break;
        case 2:
            // Hiển thị danh sách văn bản
            displayContact();
            break;
        case 3:
            // Tìm kiếm thông tin Contact theo số điện thoại
            let searchContact = promprt("Mời bạn nhập số điện thoại muốn tìm kiếm:");
            let findIndex = -1;
            
            break;
        case 4:
            // Cập nhật thông tin Contact(name, email, phone) theo id
            break;
        case 5:
            // Xoá một đối tượng Contact khỏi danh sách danh bạ theo id.
            break;
        case 6:
            break;
        default:
            console.log(`Lựa chọn của bạn không hợp lệ`);
    }
}
function displayContact () {
    for(let i in contact) {
        console.log(`Mã định danh: ${contact[i].id}`);
        console.log(`Tên người liên hệ: ${contact[i].userName}`);
        console.log(`Email: ${contact[i].email}`);
        console.log(`Số điện thoại: ${contact[i].phone}`);
        console.log(`-----------------------------------`)
        }
}