let str = prompt("Nhap chuoi ky tu bat ky");
let search = prompt("Nhap ky tu can tim");
for( let i = 0; i < str.length; i++) {
    if(str[i] === search ) {
        alert("Ton tai tu can tim kiem");
        break;
    } else {
        alert("Khong ton tai tu can tim kiem");
    }
}