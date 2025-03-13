let arr = ["apple", "banana", "cat", "elephant", "dog"];
let result = arr.filter(function(element) {
    return element.length > 5;
});
console.log(result);