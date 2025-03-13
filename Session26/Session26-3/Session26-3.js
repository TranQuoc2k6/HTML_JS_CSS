let arr = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];
let result = arr.filter(function(string) {
    return string.includes("@") && !string.includes(" ")
});
console.log(result);