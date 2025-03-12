let arr = [2, 4, 8, 1, 9, 20];
function minElement(array) {
    if( arr.length === 0) {
        console.log("Mang khong ton tai");
    }
    else {
        return Math.min(...arr);
    }
}
console.log(`Phan tu nho nhat trong mang la: ${minElement(arr)}`);