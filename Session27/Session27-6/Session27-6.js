function check() {
    let arr = [];
    let numberElement = +prompt(`Nhap so phan tu muon nhap:`);
    for (let i = 0; i < numberElement; i++) {
        let inputArr = +prompt(`Nhap phan tu thu ${i + 1}`);
        arr.push(inputArr);
    }
    console.log(arr);
    let distance = arr[1] - arr[0]; // Khoang cach gia tri giua 2 phan tu
    for (i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== distance) {
            console.log("FALSE");
            return false;
        }
    }
    console.log("TRUE");
    return true;
}
check();
