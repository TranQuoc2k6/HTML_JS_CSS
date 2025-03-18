// B1: Xây dựng cấu trúc dữ liệu
const library = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K Rowling",
        price: 20,
        year: 2000,
        isAvailable: true,
    },
    {
        id: 2,
        title: "Think and grow rich",
        author: "Napoleon Hill",
        price: 30,
        year: 2005,
        isAvailable: false,
    },
    {
        id: 3,
        title: "Cạnh tranh",
        author: "Thầy Hữu Giang",
        price: 5,
        year: 2025,
        isAvailable: true,
    },
];

// B2: Xây dựng menu
let menu = `
  ------------------ MENU ------------------
  1. Thêm sách mới.
  2. Hiển thị danh sách sách.
  3. Tìm kiếm sách theo tiêu đề.
  4. Cập nhật trạng thái mượn/trả sách theo id sách.
  5. Xóa sách theo id sách ra khỏi danh sách.
  6. Sắp xếp sách theo giá tăng dần.
  7. Thoát.
  Mời bạn nhập sự lựa chọn của bạn:
  `;
let input;

while (input !== 7) {
    // B3: Cho người dùng nhập vào các sự lựa chọn
    input = +prompt(menu);

    // B4: Điều hướng người dùng dựa vào sự lựa chọn
    switch (input) {
        case 1:
            // Thêm mới sách
            // B5: Cho người dùng nhập vào các thông số của
            // quyển sách mới cần thêm
            // (title, author, price, year, isAvailable)
            // KHÔNG nhập id
            let title = prompt("Mời bạn nhập vào tiêu đề");
            let author = prompt("Mời bạn nhập vào tên tác giả");
            let price = prompt("Mời bạn nhập vào giá của sách");
            let year = prompt("Mời bạn nhập vào năm xuất bản");
            let isAvailable = prompt("Mời bạn nhập trạng thái của sách");
            // B6: Tạo ra 1 đối tượng sách mới (id - Tự sinh, title, author
            // year, price, isAvailable)
            let book = {
                id: Math.random(),
                title: title,
                author: author,
                year: year,
                price: price,
                isAvailable: isAvailable,
            };
            // B7: Đẩy đối tượng này vào bên trong library
            library.push(book);
            // XONG
            displayBook();
            break;
        case 2:
            // Hiển thị toàn bộ sách
            displayBook();
            break;
        case 3:
            // Tìm kiếm sách theo tiêu đề
            // B11: Cho người dùng nhập vào tiêu đề của quyển sách
            // muốn tìm kiếm
            let searchTitle = prompt("Mời bạn nhập vào tiêu đề sách muốn tìm kiếm:");

            // B12: Áp dụng thuật toán Linear search
            // Khai báo biến để lưu trữ lại vị trí của quyển sách
            // thoả mãn điều kiện tìm kiếm
            let findIndex = -1;
            for (let index in library) {
                if (library[index].title === searchTitle) {
                    findIndex = index;
                    break;
                }
            }
            // Nếu không tìm thấy --> Thông báo không thấy
            // Nếu có --> Hiển thị thông tin quyển sách vừa tìm thấy
            if (findIndex === -1) {
                console.log(
                    `Không tìm thấy quyển sách nào với tiêu đề: ${searchTitle}`
                );
            } else {
                displayOneBook(library[findIndex], findIndex);
            }
            break;
        case 4:
            // Cập nhật trạng thái sách theo id
            // B13: Cho người dùng nhập vào id của quyển sách muốn cập nhật
            let searchId = +prompt("Mời bạn nhập id của quyển sách muốn cập nhật");
            // B14: Tìm kiếm quyển sách đó thông qua id (Linear search)
            let updateIndex = -1;
            for (let i = 0; i < library.length; i++) {
                if (searchId === library[i].id) {
                    updateIndex = i;
                    break;
                }
            }
            // B15: Nếu không tìm ra quyển sách --> Thông báo k thấy
            if (updateIndex === -1) {
                console.log(`Không thấy cuốn sách này có id: ${searchId} như trên`);
            } else {
                // B16: Nếu tìm thấy quyển sách --> Tiến hành cập nhật
                // Cập nhật trạng thái mượn hoặc trả sách (isAvailable)
                library[updateIndex].isAvailable = !library[updateIndex].isAvailable;
            }
            break;
        case 5:
            // Xoá sách theo id
            // Giống y hệt case 4 ở trên
            // Khác mỗi dòng cuốii ---> Tự làm đi

            break;
        case 6:
            // Sắp xếp theo giá tăng dần
            // (thuật toán sắp xếp)
            // ---> Sắp xếp nổi bọt (Bubble sort)
            // ---> Sắp xếp chèn (Insertion sort)
            // ---> Sắp xếp lựa chọn (Selection sort)

            // sort();
            break;
        case 7:
            // Thoát
            break;
        default:
            // Lựa chọn không hợp lệ
            break;
    }
}

function displayBook() {
    // B8: Duyệt qua danh sách library
    for (let i in library) {
        // B9: Lấy ra toàn bộ phần tử (đối tượng) sách trong library
        // B10: In thông tin của toàn bộ phần tử (đối tượng) có tính
        // chất tương đồng nhau đó ra màn hình console
        console.log(`Quyển sách số: ${+i + 1}`);
        console.log("Mã sách:", library[i].id);
        console.log("Tiêu đề:", library[i].title);
        console.log("Tác giả:", library[i].author);
        console.log("Giá tiền:", library[i].price);
        console.log("Năm xuất bản:", library[i].year);
        console.log("Trạng thái:", library[i].isAvailable);
        console.log("---------------------------");
    }
}

function displayOneBook(book, index) {
    console.log(`Quyển sách số: ${+index + 1}`);
    console.log("Mã sách:", book.id);
    console.log("Tiêu đề:", book.title);
    console.log("Tác giả:", book.author);
    console.log("Giá tiền:", book.price);
    console.log("Năm xuất bản:", book.year);
    console.log("Trạng thái:", book.isAvailable);
    console.log("---------------------------");
}