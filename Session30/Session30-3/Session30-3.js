let shopSmartphone = [];
let choice;
let menu = (`
    =================== MENU ========================
1. Hiển thị danh sách điện thoại theo hãng (Samsung, Apple, Xiaomi…)
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc ID
4. Mua điện thoại (Nhập ID điện thoại cần mua và số lượng)
5. Thanh toán giỏ hàng
6. Sắp xếp điện thoại theo giá
7. Hiển thị tổng số tiền của các điện thoại trong kho
8. Hiển thị tổng số lượng điện thoại theo từng hãng
9. Thoát chương trình
`);
let cart = [];
while (choice !== 9) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            let brand = prompt("Nhập hãng điện thoại bạn muốn xem:");
            let phonesByBrand = shopSmartphone.filter(phone => phone.brand.toLowerCase() === brand.toLowerCase());
            if (phonesByBrand.length > 0) {
                console.table(phonesByBrand);
            } else {
                console.log("Không có điện thoại nào thuộc hãng này!");
            }
            break;

        case 2:
            let name = prompt("Nhập tên điện thoại:");
            let price;
            do {
                price = +prompt("Nhập giá điện thoại:");
                if (!checkPrice(price)) console.log("Giá không hợp lệ! Vui lòng nhập lại.");
            } while (!checkPrice(price));
            let quantity;
            do {
                quantity = +prompt("Nhập số lượng điện thoại:");
                if (!checkQuantity(quantity)) console.log("Số lượng không hợp lệ! Vui lòng nhập lại.");
            } while (!checkQuantity(quantity));
            let brandName = prompt("Nhập hãng điện thoại:");
            let newPhone = {
                id: Math.random(),
                name: name,
                price: price,
                quantity: quantity,
                brand: brandName
            };
            shopSmartphone.push(newPhone);
            console.log("Thêm điện thoại thành công!");
            console.table(shopSmartphone);
            break;
        case 9:
            break;
        default:
            alert("Lựa chọn không hợp lệ, Vui lòng chọn lại");
    }

}
function checkPrice(input) {
    return !isNaN(input) && input > 0;
}
function checkQuantity(input) {
    return Number.isInteger(input) && input > 0;
}