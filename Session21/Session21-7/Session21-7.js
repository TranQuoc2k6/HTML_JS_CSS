let tienBanDau = +prompt("Nhap so tien gui ban dau:");
let laiSuat = +prompt("Nhap lai suat:");
let soThangGui = +prompt("Nhap so thang gui:");
let tienNhanDuoc;
if (!isNaN(tienBanDau) && !isNaN(laiSuat) && !isNaN(soThangGui) && laiSuat > 0 && laiSuat < 12) {
    tienNhanDuoc = tienBanDau * Math.pow((1 + (laiSuat / 100)), soThangGui);
} else {
    console.log("Khong hop le")
}
let tienLai = tienNhanDuoc - tienBanDau;
console.log(tienNhanDuoc);
console.log(tienLai);