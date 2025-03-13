let arr = [2, 5, 10, 7, 3, 24, 35, 4, 9, 16];
let result = arr.map(element => element ** 2).filter(element => element % 2 === 0);
console.log(result);