
let dish = [
    { name: "Kẹo kera", category: "Đồ ăn" },
    { name: "Thịt lợn", category: "Đồ ăn" },
    { name: "Pepsi không cola", category: "Đồ uống" },
    { name: "Cocacola", category: "Đồ uống" },
    { name: "Cờ lê", category: "Dụng cụ" },
    { name: "Mỏ lết", category: "Dụng cụ" },
];
let list = document.getElementById("list");
let category = document.getElementById("category");
let btn = document.getElementById("btn");

let listNew = dish.map((value) => {
    return `
          <li><b>Tên đồ ăn:</b> ${value.name} <b>- Danh mục:</b> ${value.category}</li>
      `;
});
list.innerHTML = listNew.join("");

btn.onclick = () => {
    let a = dish.map((value) => {
        if (value.category == category.value) {
            return `<li><b>Tên đồ ăn:</b> ${value.name} <b>- Danh mục:</b> ${value.category}</li>`;
        }
    });
    list.innerHTML = a.join("");
};
