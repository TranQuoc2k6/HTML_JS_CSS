let shopBook = [
    {
        id: 1,
        name: "Captain America: Thế Giới Mới",
        price: 590000,
        quantity: 16,
        category: "Marvel",
    },
    {
        id: 2,
        name: "Cửu Châu Long Quý",
        price: 160000,
        quantity: 22,
        category: "Cổ trang",
    },
    {
        id: 3,
        name: "Người Đẹp Gangnam",
        price: 720000,
        quantity: 13,
        category: "Chữa lành",
    },
    {
        id: 4,
        name: "Friendly Rivalry",
        price: 820000,
        quantity: 18,
        category: "Học đường",
    }
];
displayShopBook();
let choice;
let menu = `
        ============== MENU ===============
1. Hiển thị danh sách sách theo thể loại.
2. Thêm sách mới vào kho.
3. Tìm kiếm sách theo tên.
4. Mua sách.
5. Sắp xếp sách theo giá
6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.
7. Hiển thị tổng số lượng sách trong kho.
8. Thoát chương trình.
`;
let cart = [];
while (choice !== 8) {
    choice = +prompt(menu);
    switch (choice) {
        case 1: {
            //Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
            let inputCategory = prompt(`Nhập danh mục cần hiển thị:
                +) Marvel
                +) Cổ trang
                +) Chữa lành
                +) Học đường
                +) ... `);
            console.log(`
                    ============== Cửa hàng: ================
                    v                                       v
            `);
            for (let i in shopBook) {
                if (shopBook[i].category === inputCategory) {
                    console.table(shopBook[i]);
                }
            }
            break;
        }
        case 2: {
            // Thêm mới vào kho
            let name = prompt("Nhập vào tên sách:");
            let price = +prompt("Nhập giá của sách:");
            let quantity = +prompt("Nhập số lượng của sách:");
            let category = prompt("Nhập danh mục của sách:");
            let books = {
                id: Math.random(),
                name: name,
                price: price,
                quantity: quantity,
                category: category,
            };
            shopBook.push(books);
            console.table(shopBook);
            break;
        }
        case 3: {
            // TÌm kiếm sách theo tên hoặc id
            let inputName = prompt("Nhập vào tên sách muốn tìm kiếm:");
            let findIndex = -1;
            for (let i in shopBook) {
                if (inputName === shopBook[i].name) {
                    findIndex = i;
                    break;
                }
            }
            if (findIndex === -1) {
                console.log("Sách không tồn tại trong cửa hàng!!")
            } else {
                console.log(`
                    ============== Cửa hàng: ================
                    v                                       v
    `);
                console.table(shopBook[findIndex]);
            }
            break;
        }
        case 4: {
            // Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
            let inputId = +prompt("Nhập id sách cần mua:");
            let findIndex = -1;
            for (let i in shopBook) {
                if (shopBook[i].id === inputId) {
                    findIndex = i;
                    break;
                }
            }
            let inputQuantity = +prompt("Nhập số lượng sách muốn mua:");
            shopBook[findIndex].quantity -= inputQuantity;
            if (shopBook[findIndex].quantity < 0) {
                console.log(`Số lượng sách trong cửa hàng không đủ`);
                shopBook[findIndex].quantity += inputQuantity;
                break;
            }
            if (findIndex === -1) {
                console.log("Sản phẩm không có trong cửa hàng");
            } else {
                cart.push(
                    {
                        name: shopBook[findIndex].name,
                        price: shopBook[findIndex].price,
                        quantity: inputQuantity,
                        category: shopBook[findIndex].category
                    }
                );
            }
            console.log(`
                    ============== Giỏ hàng: ===============
                    v                                      v          
            `);
            console.table(cart);
            displayShopBook();
            break;
        }
        case 5: {
            //Sắp xếp sách theo giá:
            // 5.1 - Tăng dần.
            // 5.2 - Giảm dần.
            let menuChild = `
            5.1 - Tăng dần
            5.2 - Giảm dần
            `;
            let pick;
            pick = +prompt(menuChild);
            switch (pick) {
                case 5.1: {
                    shopBook.sort((a, b) => a.price - b.price);
                    displayShopBook();
                    break;
                }
                case 5.2: {
                    shopBook.sort((a, b) => b.price - a.price);
                    displayShopBook();
                    break;
                }
            }
            break;
        }
        case 6: {
            // Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.
            let total = cart.reduce((sum, item) => item.price * item.quantity + sum, 0);
            console.log(`Tổng số tiền trong giỏ hàng là: ${total}`);
            break;
        }
        case 7: {
            // Hiển thị tổng số lượng sách trong kho.
            let sumQuantity = shopBook.reduce((sum, book) => sum + book.quantity, 0);
            console.log(`Tổng số lượng sách trong kho là: ${sumQuantity}`);
            break;
        }
        case 8: {
            // Thoát chương trình.
            break;
        }
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại");
    }
}

function displayShopBook() {
    console.log(`
                    ============== Cửa hàng: ================
                    v                                       v
    `);
    console.table(shopBook);

}