const products = [];
let choice;
let menu = `
==========MENU==========
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. Thoát.
----------->Lựa chọn của bạn:
`;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1: {
            let nameProduct = prompt("Nhập tên sản phẩm");
            let price = +prompt("Nhập giá sản phẩm");
            let category = prompt("Nhập danh mục");
            let quantity = +prompt("Nhập số lượng");
            let product = {
                id: Math.random(),
                name: nameProduct,
                price: price,
                category: category,
                quantity: quantity
            };
            products.push(product);
            break;
        }
        case 2: {
            displayProducts();
            break;
        }
        case 3: {
            let searchId = +prompt("Nhập ID sản phẩm muốn tìm:");
            let found = false;
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === searchId) {
                    console.log(products[i]);
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log("Không tìm thấy sản phẩm");
            }
            break;
        }
        case 4: {
            let updateId = +prompt("Nhập ID sản phẩm cần cập nhật");
            let found = false;
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === updateId) {
                    let fields = ["name", "price", "category", "quantity"];
                    for (let j = 0; j < fields.length; j++) {
                        let newValue = prompt(`Nhập ${fields[j]} mới (${products[i][fields[j]]}):`).trim();
                        if (newValue !== "") {
                            products[i][fields[j]] = isNaN(newValue) ? newValue : +newValue;
                        }
                    }
                    console.log("Cập nhật sản phẩm thành công");
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log("Không tìm thấy sản phẩm");
            }
            break;
        }
        case 5: {
            let deleteId = +prompt("Nhập ID sản phẩm cần xóa");
            let found = false;
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === deleteId) {
                    let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này?");
                    if (confirmDelete) {
                        for (let j = i; j < products.length - 1; j++) {
                            products[j] = products[j + 1];
                        }
                        products.pop();
                        console.log("Xóa sản phẩm thành công");
                    } else {
                        console.log("Đã hủy thao tác xóa");
                    }
                    found = true;
                    break;
                }
            }
            if (!found) {
                console.log("Không tìm thấy sản phẩm");
            }
            break;
        }
        case 6: {
            let minPrice = +prompt("Nhập giá nhỏ nhất");
            let maxPrice = +prompt("Nhập giá lớn nhất");
            let filteredProducts = [];
            for (let i = 0; i < products.length; i++) {
                if (products[i].price >= minPrice && products[i].price <= maxPrice) {
                    filteredProducts.push(products[i]);
                }
            }
            for (let i = 0; i < filteredProducts.length; i++) {
                console.log(filteredProducts[i]);
            }
            if (filteredProducts.length === 0) {
                console.log("Không tìm thấy sản phẩm nào trong khoảng giá này");
            }
            break;
        }
        case 7:
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
}

function displayProducts() {
    for (let i in products) {
        console.log(`Mã sản phẩm: ${products[i].id}`);
        console.log(`Mã sản phẩm: ${products[i].name}`);
        console.log(`Giá sản phẩm: ${products[i].price}`);
        console.log(`Danh mục: ${products[i].category}`);
        console.log(`Số lượng: ${products[i].quantity}`);
        console.log(`=====================================`);
    }
}