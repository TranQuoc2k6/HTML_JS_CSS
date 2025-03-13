// function myFunction(random){
//    random();
// }
// myFunction(function() {});

let numbers = [10, 20, 30, 40, 50, 60, 70];
// forEach - Lặp 
numbers.forEach(function (element, index) {
    console.log(index, element);
});

//map - Ánh xạ
let result = numbers.map(function (element, index) {
    return `Con số: ${element}`;
});
console.log(result);

// filter - Lọc
let filterResult = numbers.filter(function (element, index) {
    return element > 20 && element < 60;
});
console.log(filterResult);

// reduce - Giảm
// acc - accumulator - biến tích luỹ
// cur - current value - Giá trị hiện tại
let reduceResult = numbers.reduce(function (acc, cur) { // 0 là biến khởi tạo 
    console.log("acc", acc);
    console.log("cur", cur);
    return acc + cur;
}, 0);

console.log("Reduce result", reduceResult); 