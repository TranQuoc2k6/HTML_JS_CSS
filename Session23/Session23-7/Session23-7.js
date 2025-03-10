let arr = [1, 2, 2, 6, 5, 7, 8, 8, 9];
let newarr = [...new Set(arr)];
newarr.sort((a, b) => a - b);
console.log(newarr);
console.log(`So lon thu hai la ${newarr[newarr.length - 2]}`);