let input = [1, 22, 10, 9, 8];
if (input.length === 0) {
    console.log("Mang rong");
}
function check(arr) {
    let filterResult = arr.filter(function (element, index) {
        return element >= 10;
    });
    console.log(filterResult);
}

check(input);