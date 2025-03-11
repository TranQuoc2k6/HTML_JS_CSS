
// Chuong trinh may ban nuoc tu dong

// Khai bao ham
// Function Declaration
function mayBanNuocTuDong(money) {
    if (money === 10000) {
        return "Pepsi vi chanh khong calo";
    } else if (money === 15000) {
        return "Highland coffee";
    } else if (money === 20000) {
        return "Mountain Dew";
    } else {
        return "Tien khong hop le";
    }
}


// Input : Tung to tien
// Output : Tung lon nuoc theo menh gia 
// Thuc thi ham - Function Execution
let lonNuoc1 = mayBanNuocTuDong(10000); //Pepsi vi chanh khong calo
let lonNuoc2 = mayBanNuocTuDong(15000); // Highland coffee
let lonNuoc3 = mayBanNuocTuDong(20000); //Mountain Dew
// 10000; 20000; 15000; - Arguments (DOi SO THUC TE)

console.log(lonNuoc1);
console.log(lonNuoc2);
console.log(lonNuoc3);

// Ham tinh tong 2 so
// Ham khong ten - Anonymous Function
// IIFE
let sum = (function (a, b) {
    return a + b;
})(1, 2);

// Bieu thuc ham - Function Expression
let caculateResult = function (a, b) {
    return a * b;
};

console.log(sum);
console.log(caculateResult(1, 2));
