let number = +prompt("Nhap mot luong bat ky");
let f0 = +1;
let f1 = +1;
let fn;
for (let i = 1; i <= number; i++) {
    console.log(`${f0} `);
    fn = f0 + f1;
    f0 = f1;
    f1 = fn;
}
