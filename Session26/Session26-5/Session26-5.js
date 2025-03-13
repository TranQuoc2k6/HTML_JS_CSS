let arr = [10, 9, 5, 11, 24, 5, 4, 7, 9, 20];
function check(arr)  {
        let maxElement = Math.max(...arr);
        let index = arr.indexOf(maxElement);
        return {maxElement, index};
};
let result = check(arr);
console.log(`Max = ${result.maxElement}`);
console.log(`Position: ${result.index}`);
