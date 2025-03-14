function dienTichHinhTron(r) {
    return Math.PI * Math.pow(r, 2);
}

function chuViHinhTron(radius) {
    return 2 * Math.PI * radius;
}

function dienTichChuNhat(w, h) {
    return w * h;
}

function chuViHinhChuNhat(wigth, height) {
    return 2 * (wigth + height);
}
function calculate() {
    let choice;
    let menu = `
1.Tính diện tích hình tròn.
2.Tính chu vi hình tròn.
3.Tính diện tích hình chữ nhật.
4.Tính chu vi hình chữ nhật.
5.Thoát.`;
    while (choice !== 5) {
        choice = +prompt(menu);
        switch (choice) {
            case 1:
                let r = parseFloat(prompt("Nhap ban kinh hinh tron"))
                result = dienTichHinhTron(r).toFixed(2)
                console.log(`Ket qua la:${result}`)
                break;
            case 2:
                let radius = parseFloat(prompt("Nhap ban kinh hinh tron"));
                result = chuViHinhTron(radius).toFixed(2)
                console.log(`Ket qua la:${result}`)
                break;
            case 3:
                let w = parseFloat(prompt("Nhap chieu rong:"));
                let h = parseFloat(prompt("Nhap chieu cao:"));
                result = dienTichChuNhat(w, h).toFixed(2)
                console.log(`dien tich hinh chu nhat:${result}`)
                break;
            case 4:
                let wigth = parseFloat(prompt("Nhap chieu rong:"));
                let height = parseFloat(prompt("Nhap chieu cao:"));
                result = chuViHinhChuNhat(wigth, height).toFixed(2)
                console.log(`Chu vi hinh chu nhat:${result}`)
                break;
            case 5:
                break;
            default:
                console.log("Lua chon khong hop le");
                break;

        }
    }
}
calculate();