function checkEven(arr) {
    let even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] / 1 === arr[i] && arr[i] % 2 === 0) {
            even.push(arr[i]);
        }
    }
    if (even.length > 0) {
        console.log(even.join(", "));
    } 
}

let array = [11,4,65,6];
checkEven(array);