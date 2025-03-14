let choice;
let number1;
let number2;
let menu = `
1. Cộng hai số.
2. Trừ hai số.
3. Nhân hai số.
4. Chia hai số.
5. Thoát.
======>Lựa chọn của bạn:`;
while (choice !== 5) {
    choice = +prompt(menu);
    switch (choice) {
        case 1:
            total();
            break;
        case 2:
            signal();
            break;
        case 3:
            accumulation();
            break;
        case 4:
            love();
            break;
        case 5:
            break;
        default:
            console.log("Lua chon khong hop le");
            break;
    }
}
function number() {
    number1 = +prompt("Nhap so thu nhat:");
    number2 = +prompt("Nhap so thu hai:");
}

function total() {
    number();
    sum = number1 + number2;
    console.log(`${number1} + ${number2} = ${sum}`);
}

function signal() {
    number();
    subtraction = number1 - number2;
    console.log(`${number1} - ${number2} = ${subtraction}`);
}

function accumulation() {
    number();
    permission = number1 * number2;
    console.log(`${number1} x ${number2} = ${permission}`);
}

function love() {
    number();
    division = number1 / number2;
    console.log(`${number1} : ${number2} = ${division}`);
}