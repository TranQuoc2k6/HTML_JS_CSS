let a = +prompt("Nhap so a");
let b = +prompt("Nhap so b");
let c = +prompt("Nhap so c");

if (a === 0) {
    if (b === 0) {
        if (c === 0) {
            console.log("Phuong trinh vo so nghiem");
        } else {
            console.log("Phuong trinh vo nghiem");
        }
    } else {
        let x0 = -c / b;
        console.log(`Phuong trinh tro thanh bac nhat va co nghiem duy nhat la x = ${x0}`)
    }
} else {
    let delta = b * b - 4 * a * c;
    let x1 = (-b + Math.sqrt(delta)) / 2 * a;
    let x2 = (-b - Math.sqrt(delta)) / 2 * a;
    let x = -b / 2 * a;
    if(delta > 0){
        console.log(`Phuong trinh co hai nghiem phan biet x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0 ) {
        console.log(`Phuong trinh co mot nghiem kep x = ${x}`);
    } else {
        console.log(`Phuong trinh vo nghiem`);
    }
}