function symmetry(str) {
    if (str.length === 0) {
        alert("Chuoi khong ton tai")
        return;
    }
    let newStr = str.split(``).reverse().join("");
    if (str === newStr) {
        alert("La chuoi doi xung")
    } else {
        alert("Khong phai la chuoi doi xung")
    }
}

let arr = prompt("Nhap chuoi ky tu");
symmetry(arr);