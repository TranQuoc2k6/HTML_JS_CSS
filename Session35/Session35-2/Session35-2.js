let addBookMark = document.getElementById("add-bookmark");
let containerAdd = document.getElementById("container-add");
let closeBtns = document.querySelectorAll(".close");
let save = document.getElementById("save");
let listBookMark = document.getElementById("content");
let nameInput = document.getElementById("name-input");
let urlInput = document.getElementById("url-input");

let list = [];

// Lấy dữ liệu từ localStorage khi tải trang
duLieu();
display();

// Hiển thị modal thêm mới bookmark
addBookMark.onclick = () => {
    containerAdd.classList.add("show");
};

// Đóng modal khi bấm nút đóng
closeBtns.forEach((btn) => {
    btn.onclick = () => {
        containerAdd.classList.remove("show");
        resetInput();
    };
});

// Lưu bookmark khi bấm nút Save
save.onclick = (event) => {
    event.preventDefault();

    let name = nameInput.value.trim();
    let url = urlInput.value.trim();

    if (name === "" || url === "") {
        alert("Không được để trống thông tin");
        return;
    }

    try {
        new URL(url); // Kiểm tra xem URL có hợp lệ không
    } catch {
        alert("URL không hợp lệ");
        return;
    }

    let bookMarkInput = { name, url };
    list.push(bookMarkInput);

    luuTru();
    display();
    containerAdd.classList.remove("show");
    resetInput();
};

// Hiển thị danh sách bookmark
function display() {
    listBookMark.innerHTML = ""; // Xóa nội dung cũ trước khi cập nhật

    list.forEach((element, index) => {
        let domain = new URL(element.url).hostname;
        let faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;

        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `
            <i class="fa-solid fa-xmark delete-btn" data-index="${index}"></i>
            <div>
                <img src="${faviconUrl}" alt="${element.name}">
                <a href="${element.url}" target="_blank">${element.name}</a>
            </div>
        `;

        listBookMark.appendChild(item);
    });

    // Gán sự kiện xoá sau khi danh sách được cập nhật
    deleteBookMark();
}

// Lưu danh sách vào localStorage
function luuTru() {
    localStorage.setItem("listBookMark", JSON.stringify(list));
}

// Lấy danh sách từ localStorage
function duLieu() {
    let data = localStorage.getItem("listBookMark");
    list = data ? JSON.parse(data) : [];

    // Kiểm tra nếu dữ liệu bị lỗi hoặc null
    if (!Array.isArray(list)) {
        list = [];
    }
}

// Xoá bookmark
function deleteBookMark() {
    document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.onclick = () => {
            let index = parseInt(btn.getAttribute("data-index"), 10);
            if (!isNaN(index) && index >= 0 && index < list.length) {
                list.splice(index, 1);
                luuTru();
                display();
            }
        };
    });
}

// Reset input sau khi đóng modal hoặc lưu thành công
function resetInput() {
    nameInput.value = "";
    urlInput.value = "";
}
