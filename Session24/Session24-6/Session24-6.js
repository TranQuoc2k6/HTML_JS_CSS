let str = "";
let menu = `
1. Nhập chuỗi
2. Hiển thị chuỗi
3. Tính độ dài của chuỗi
4. Đếm số lần xuất hiện của một ký tự
5. Kiểm tra chuỗi đối xứng
6. Viết hoa chữ cái đầu của mỗi từ
7. Thoát chương trình
`;
let choice;
while (choice !== 7) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            str = prompt("Nhap chuoi muon nhap:");
            break;
        case 2:
            console.log(`Chuoi vua nhap la: ${str}`)
            break;
        case 3:
            console.log(`Do dai cua chuoi la ${str.length}`)
            break;
        case 4:
            let character = prompt("Nhap ky tu muon kiem tra:");
            if (character.length !== 1) {
                console.log("Ky tu khong hop le");
            } else {
                let count = 0;
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === character) {
                        count++;
                    }
                }
                console.log(`So lan xuat hien ki tu'${character}' la: ${count}`);
            }
            break;


        case 5:
            let reversedStr = str.split("").reverse().join("");
            if (str === reversedStr) { 
                console.log("La chuoi doi xung");
            } else {
                console.log("Khong phai la chuoi doi xung");
            }

            break;
        case 6:
            let words = string.split(" ");
            for (let i = 0; i < words.length; i++) {
                if (words[i].length > 0) {
                    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
                }
            }
            string = words.join(" ");
            console.log("Chuoi sau khi chuyen doi la: " + string);
            break;
        case 7:
            break;
    }
}