// Dữ liệu sản phẩm mẫu
const products = [
    { id: 1, name: 'Điện thoại Samsung Galaxy A54', price: 7490000, image: 'https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg' },
    { id: 2, name: 'Laptop Dell Inspiron 15', price: 15990000, image: 'dell.jpg' },
    { id: 3, name: 'Tai nghe AirPods Pro', price: 4990000, image: 'airpods.jpg' },
    { id: 4, name: 'Đồng hồ thông minh Apple Watch', price: 8990000, image: 'apple-watch.jpg' },
    { id: 5, name: 'Máy ảnh Canon EOS M50', price: 12490000, image: 'canon.jpg' },
    { id: 6, name: 'Loa Bluetooth JBL Flip 5', price: 2190000, image: 'jbl.jpg' },
    { id: 7, name: 'Bàn phím cơ Logitech G Pro', price: 2490000, image: 'logitech.jpg' },
    { id: 8, name: 'Chuột không dây Logitech MX Master', price: 1890000, image: 'mx-master.jpg' }
];

// Khởi tạo giỏ hàng
let cart = [];

// const savedCart = localStorage.getItem('cart');
// if (savedCart) {
//     cart = JSON.parse(savedCart);
//     updateCartDisplay();
// }


let savedCart = localStorage.getItem(`cart`);
if(savedCart) {
    cart = JSON.parse(savedCart);
    updateCartDisplay();
}

// Định dạng tiền tệ
function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
}

// Hiển thị sản phẩm
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML =
            `<img class="product-image" src="${product.image}">
            <div class="product-title">${product.name}</div>
            <div class="product-price">${formatCurrency(product.price)}</div>
            <button class="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>`
            ;

        productGrid.appendChild(productCard);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);

    // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        // Nếu đã có, tăng số lượng
        existingItem.quantity++;
    } else {
        // Nếu chưa có, thêm vào giỏ hàng với số lượng là 1
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    // Cập nhật hiển thị giỏ hàng
    updateCartDisplay();
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
function updateQuantity(productId, change) {
    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += change;

        // Nếu số lượng = 0, xóa sản phẩm khỏi giỏ hàng
        if (cartItem.quantity <= 0) {
            removeFromCart(productId);
        } else {
            // Cập nhật hiển thị giỏ hàng
            updateCartDisplay();
        }
    }
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Cập nhật hiển thị giỏ hàng
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Tính tổng tiền
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Cập nhật hiển thị tổng tiền
    cartTotalElement.textContent = `Tổng: ${formatCurrency(total)}`;

    // Cập nhật danh sách sản phẩm trong giỏ hàng
    if (cart.length === 0) {
        cartItemsElement.innerHTML = '<div class="empty-cart">Giỏ hàng trống</div>';
    } else {
        cartItemsElement.innerHTML = '';

        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';

            cartItemElement.innerHTML =
                `<div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatCurrency(item.price)} x ${item.quantity}</div>
                </div>
                <div class="quantity-controls">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                    <button class="remove" data-id="${item.id}">X</button>
                </div>`
                ;

            cartItemsElement.appendChild(cartItemElement);
        });

        // Thêm sự kiện click cho các nút trong giỏ hàng
        const decreaseButtons = document.querySelectorAll('.decrease-btn');
        const increaseButtons = document.querySelectorAll('.increase-btn');
        const removeButtons = document.querySelectorAll('.remove');

        decreaseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, -1);
            });
        });

        increaseButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                updateQuantity(productId, 1);
            });
        });

        removeButtons.forEach(button => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
    }
    localStorage.setItem(`cart`, JSON.stringify(cart));
}

// Xử lý sự kiện thanh toán
document.getElementById('checkout-btn').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Giỏ hàng của bạn đang trống!');
    } else {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        alert(`Cảm ơn bạn đã mua hàng!\nTổng giá trị đơn hàng: ${formatCurrency(total)}`);

        // Xóa giỏ hàng sau khi thanh toán
        cart = [];
        updateCartDisplay();
    }
});

// Khởi tạo hiển thị ban đầu
displayProducts();