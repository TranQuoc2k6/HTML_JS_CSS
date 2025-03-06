let password = "qatran2006";
while (true) {
    let check = prompt("Nhap password:");
    if (check === password) {
        alert(`Nhap password thanh cong`);
        break;
    } else {
        alert(`Password chua dung`);
    }
}