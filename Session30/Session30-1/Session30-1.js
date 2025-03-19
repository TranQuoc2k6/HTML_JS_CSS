let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];
displayShop();
let cart = [];
let choice;
let menu = `
                ============= MENU ==============
1. Hiển thị các sản phẩm theo tên danh mục.
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá
4. Tính số tiền thanh toán trong giỏ hàng.
5. Thoát.
-----> Nhập lựa chọn của bạn:`
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1: {
            // Hiển thị các sản phẩm theo tên danh mục
            let inputCategory = prompt(`Nhập danh mục cần hiển thị:
                +) món ăn dân tộc Kinh
                +) món ăn dân tộc Mông`);
            console.log(`
            ============== Cửa hàng: ================
            v                                       v
                `);
            for (let i in products) {
                if (products[i].category === inputCategory) {
                    console.table(products[i]);
                }
            }
            break;
        }
        case 2: {
            // Chọn sản phẩm mua bằng cách nhập id sản phẩm
            // Sản phẩm không có trong cửa hàng hiển thị thông báo.
            // Sản phẩm có trong cửa hàng:
            // Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
            // Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
            let inputId = +prompt("Nhập id sản phẩm cần mua:");
            let findIndex = -1;
            for (let i in products) {
                if (products[i].id === inputId) {
                    findIndex = i;
                    break;
                }
            }
            let inputQuantity = +prompt("Nhập số lượng sản phẩm muốn mua:");
            products[findIndex].quantity -= inputQuantity;
            if (products[findIndex].quantity < 0) {
                console.log(`Số lượng sản phẩm trong cửa hàng không đủ`);
                products[findIndex].quantity += inputQuantity;
                break;
            }
            if (findIndex === -1) {
                console.log("Sản phẩm không có trong cửa hàng");
            } else {
                cart.push(
                    {
                        name: products[findIndex].name,
                        price: products[findIndex].price,
                        quantity: inputQuantity,
                        category: products[findIndex].category
                    }
                );
            }
            console.log(`
            ============== Giỏ hàng: ===============
            v                                      v          
                `);
            console.table(cart);
            displayShop();
            break;
        }
        case 3: {
            // Sắp xếp các sản phẩm trong cửa hàng theo giá
            // Tăng dần.
            // Giảm dần.   
            let menuChild = `
            3.1 - Tăng dần
            3.2 - Giảm dần
            `;
            let pick;
            pick = +prompt(menuChild);
            switch (pick) {
                case 3.1: {
                    products.sort((a, b) => a.price - b.price);
                    displayShop();
                    break;
                }
                case 3.2: {
                    products.sort((a, b) => b.price - a.price);
                    displayShop();
                    break;
                }
            }
            break;
        }
        case 4: {
            // Tính số tiền thanh toán trong giỏ hàng
            let total = cart.reduce((sum, item) => item.price * item.quantity + sum, 0);
            console.log(`Tổng số tiền trong giỏ hàng: ${total}`);
            break;
        }
        case 5: {
            // Thoát
            break;
        }
        default:
            alert("Lựa chọn không hợp lệ, vui lòng lựa chọn lại!!!");
    }
}

function displayShop() {
    console.log(`
            ============== Cửa hàng: ================
            v                                       v
        `);
    console.table(products);
}
